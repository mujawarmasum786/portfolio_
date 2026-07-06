"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { hubNodes } from "@/data/content";

type NodeDatum = {
  id: string;
  label: string;
  icon: string;
  color: string;
  x: number;
  y: number;
  isHub?: boolean;
  originalX: number;
  originalY: number;
};

const WIDTH = 760;
const HEIGHT = 640;
const RADIUS = 230;
const CENTER = { x: WIDTH / 2, y: HEIGHT / 2 };

export default function UniverseHub() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const nodes: NodeDatum[] = [
      {
        id: "hub",
        label: "MASUM",
        icon: "",
        color: "#0de5ff",
        x: CENTER.x,
        y: CENTER.y,
        originalX: CENTER.x,
        originalY: CENTER.y,
        isHub: true,
      },
      ...hubNodes.map((n) => {
        const rad = (n.angle * Math.PI) / 180;
        return {
          id: n.id,
          label: n.label,
          icon: n.icon,
          color: n.color,
          x: CENTER.x + RADIUS * Math.cos(rad),
          y: CENTER.y + RADIUS * Math.sin(rad),
          originalX: CENTER.x + RADIUS * Math.cos(rad),
          originalY: CENTER.y + RADIUS * Math.sin(rad),
        };
      }),
    ];

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const zoomLayer = svg.append("g").attr("class", "zoom-layer");

    // connecting lines from hub to each satellite
    const hubNode = nodes[0];
    const linkGroup = zoomLayer.append("g");
    const links = linkGroup
      .selectAll("line")
      .data(nodes.slice(1))
      .join("line")
      .attr("x1", hubNode.x)
      .attr("y1", hubNode.y)
      .attr("x2", (d) => d.x)
      .attr("y2", (d) => d.y)
      .attr("stroke", "rgba(139,147,167,0.25)")
      .attr("stroke-width", 1);

    const nodeGroup = zoomLayer.append("g");

    const nodeSel = nodeGroup
      .selectAll<SVGGElement, NodeDatum>("g.node")
      .data(nodes)
      .join("g")
      .attr("class", "node")
      .attr("transform", (d) => `translate(${d.x},${d.y})`)
      .style("cursor", "pointer");

    nodeSel
      .append("circle")
      .attr("class", "node-circle")
      .attr("r", (d) => (d.isHub ? 75 : 38))
      .attr("fill", "#0d1730")
      .attr("stroke", (d) => d.color)
      .attr("stroke-width", (d) => (d.isHub ? 2 : 1.5))
      .style("filter", (d) =>
        d.isHub
          ? "drop-shadow(0 0 20px rgba(13,229,255,0.6))"
          : `drop-shadow(0 0 8px ${d.color}88)`
      );

    nodeSel
      .filter((d) => !d.isHub)
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "0.1em")
      .attr("font-size", 22)
      .text((d) => d.icon);

    nodeSel
      .filter((d) => !!d.isHub)
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "-0.2em")
      .attr("font-size", 16)
      .attr("font-weight", 700)
      .attr("letter-spacing", "1px")
      .text("MASUM");

    nodeSel
      .filter((d) => !!d.isHub)
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "1.3em")
      .attr("font-size", 9)
      .attr("fill", "#8b93a7")
      .text("FULL STACK DEVELOPER");

    // labels outside satellite nodes
    nodeSel
      .filter((d) => !d.isHub)
      .append("text")
      .attr("text-anchor", "middle")
      .attr("y", 58)
      .attr("font-size", 12)
      .attr("letter-spacing", "1px")
      .attr("fill", "#8b93a7")
      .text((d) => d.label.toUpperCase());

    // drag behaviour: reposition node + connected line, distinguish from click
    let moved = false;
    const drag = d3
      .drag<SVGGElement, NodeDatum>()
      .on("start", () => {
        moved = false;
      })
      .on("drag", function (event, d) {
        moved = true;
        d.x = event.x;
        d.y = event.y;
        d3.select(this).attr("transform", `translate(${d.x},${d.y})`);
        links
          .filter((l) => l.id === d.id)
          .attr("x2", d.x)
          .attr("y2", d.y);
      })
      .on("end", function (_event, d) {
        // Animate node back
        d.x = d.originalX;
        d.y = d.originalY;

        d3.select(this)
          .transition()
          .duration(600)
          .ease(d3.easeCubicOut)
          .attr("transform", `translate(${d?.originalX}, ${d?.originalY})`);

        // Animate line back
        links
          .filter((l) => l.id === d.id)
          .transition()
          .duration(600)
          .ease(d3.easeCubicOut)
          .attr("x2", d?.originalX)
          .attr("y2", d?.originalY);
      });

    nodeSel.call(drag as any);

    // click to navigate to section (only fires if not dragged)
    nodeSel.on("click", (_event, d) => {
      if (moved) return;
      if (d.isHub) return;
      const el = document.getElementById(d.id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    });

    nodeSel
      .on("mouseenter", function () {
        d3.select(this)
          .select("circle")
          .transition()
          .duration(150)
          .attr("r", function () {
            const r = d3.select(this).attr("r");
            return `${parseFloat(r) * 1.12}`;
          });
      })
      .on("mouseleave", function (_event, d) {
        d3.select(this)
          .select("circle")
          .transition()
          .duration(150)
          .attr("r", d.isHub ? 75 : 38);
      });

    // zoom + pan on the whole graph
    const zoomBehavior = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.6, 2])
      .on("zoom", (event) => {
        zoomLayer.attr("transform", event.transform);
      });

    svg.call(zoomBehavior as any);
  }, []);

  return (
    <div className="relative mx-auto max-w-4xl">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="hub-svg w-full h-auto touch-none select-none"
      />
      <div className="flex justify-center gap-7 mt-2 text-dim text-[11px] tracking-[2px]">
        <span>◈ DRAG</span>
        <span>⌕ ZOOM</span>
        <span>◎ CLICK</span>
        <span>✦ EXPLORE</span>
      </div>
    </div>
  );
}
