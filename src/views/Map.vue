<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
const cities = [
  {
    code: "OTT",
    city: "OTTAWA",
    country: "CANADA",
    lat: "23.10",
    lon: "120.34",
  },
  {
    code: "BSB",
    city: "BRASILIA",
    country: "BRAZIL",
    lat: "-32.85",
    lon: "133.30",
  },
  { code: "DEL", city: "DELHI", country: "INDIA", lat: "4.71", lon: "-127.57" },
  {
    code: "CMX",
    city: "CIDADE DO MÉXICO",
    country: "MÉXICO",
    lat: "0.42",
    lon: "93.19",
  },
  {
    code: "SID",
    city: "SIDNEY",
    country: "AUSTRALIA",
    lat: "-48.38",
    lon: "-71.71",
  },
  {
    code: "TOK",
    city: "TOQUIO",
    country: "JAPÃO",
    lat: "17.34",
    lon: "-81.73",
  },
  {
    code: "CCA",
    city: "CIDADE DO CABO",
    country: "AFRICA DO SUL",
    lat: "-43.20",
    lon: "-171.97",
  },
  {
    code: "CMP",
    city: "CAMPO GRANDE",
    country: "BRASIL",
    lat: "-36.15",
    lon: "130.72",
  },
  {
    code: "PAR",
    city: "PARIS",
    country: "FRANÇA",
    lat: "22.19",
    lon: "174.27",
  },
  {
    code: "NOY",
    city: "NOVA YORK",
    country: "USA",
    lat: "11.23",
    lon: "112.96",
  },
];

export default {
  name: "Map",
  data() {
    return {
      background:
        "https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg",
      width: 960,
      height: 600,
      start_x: null,
      start_y: null,
      projection: null,
      scale: 200,
      svg: null,
      path: null,
      g: null,
      drag_handler: null,
    };
  },
  methods: {
    createMap() {
      this.projection = d3
        .geoMercator()
        .center([0, 5])
        .scale(this.scale)
        .rotate([-180, 0]);
      this.svg = d3
        .select("#map")
        .append("svg:svg")
        .attr("width", this.width)
        .attr("height", this.height);
      (this.path = d3.geoPath().projection(this.projection)),
        (this.g = this.svg.append("g"));
      this.g
        .append("image")
        .attr("xlink:href", this.background)
        .append("path")
        .attr("d", this.path);

      this.request();
    },
    request() {
      const app = this,
        circles = this.g
          .selectAll("circle")
          .data(cities)
          .enter()
          .append("a")
          .attr(
            "xlink:href",
            (d) => `https://www.google.com/search?q=${d.city}`
          )
          .append("circle")
          .attr("cx", (d) => this.projection([d.lon, d.lat])[0])
          .attr("cy", (d) => this.projection([d.lon, d.lat])[1])
          .attr("r", 5)
          .style("fill", "red");

      this.drag_handler = d3
        .drag()
        .on("start", this.drag_start)
        .on("drag", (d, i, a) => this.drag_drag(d, i, a));

      this.drag_handler(circles);
    },
    drag_start() {
      this.start_x = +d3.event.x;
      this.start_y = +d3.event.y;
    },
    drag_drag(d, i, a) {
      console.log(
        "lon x lat",
        this.projection.invert([d3.event.x, d3.event.y])
      );
      d3.select(a[i])
        .attr("cx", (d.x = d3.event.x))
        .attr("cy", (d.y = d3.event.y));
    },
  },
  mounted() {
    this.createMap();
    const zoom = d3
      .zoom()
      .scaleExtent([0.1, 10]) //zoom limit
      .on("zoom", () => {
        this.g.style("stroke-width", `${1.5 / d3.event.transform.k}px`);
        this.g.attr("transform", d3.event.transform); // updated for d3 v4
      });

    this.svg
      .call(zoom)
      //.call(zoom.transform, d3.zoomIdentity.translate(200, 20).scale(0.25)) //initial size
      .append("svg:g")
      .attr("transform", "translate(100,50) scale(.5,.5)");
  },
};
</script>

<style>
</style>