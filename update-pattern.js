const update = (data) => {

  // update scales (domains) if they rely on our data
  y.domain([0, d3.max(data, d => d.orders)]);

  //join update data to elements
  const rects = graph.selectAll('rect').data(data);

  //delete empty elements of DOM 
  rects.exit().remove();

  //update current shapes in the dom
  rects.attr(...etc);

  // append the enter selection to the dom
  rects.enter().append('rect').attr(...etc);
}