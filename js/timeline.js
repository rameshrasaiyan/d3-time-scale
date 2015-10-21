var width = 800,
    height = 400,
    padding = 100;

var mindate = new Date(2012,0,1),
    maxdate = new Date(2012,0,31);

var svgContainer = d3.select('.chart')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

var yScale = d3.scale.linear()
  .domain([0, 100])
  .range([height - padding, padding]);

var yAxis = d3.svg.axis()
  .orient('left')
  .scale(yScale);

var xScale = d3.time.scale()
  .domain([mindate, maxdate])
  .range([padding, width - padding * 2]);

var xAxis = d3.svg.axis()
  .orient('bottom')
  .scale(xScale);

  svgContainer.append('g')
    .attr('transform', 'translate('+padding+', 0)')
    .call(yAxis);

  svgContainer.append('g')
    .attr("class", "xaxis")
    .attr('transform', 'translate(0,'+ (height - padding) +')')
    .call(xAxis);

  svgContainer.selectAll('.xaxis text')
    .attr('transform', function(d) {
      return 'translate('+ this.getBBox().height*-2 + "," + this.getBBox().height +')rotate(-45)'
    });
