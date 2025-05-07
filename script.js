const data = [
  { "CLASS_NAME": "HIGH DENSITY URBAN", "LOSS": 169.8093, "GAIN": 213.7284, "CHANGED": 0.296634227, "UNCHANGED": 148.0581 },
  { "CLASS_NAME": "LOW DENSITY URBAN", "LOSS": 82.044, "GAIN": 42.7554, "CHANGED": -1.745671212, "UNCHANGED": 22.5063 },
  { "CLASS_NAME": "WETLAND", "LOSS": 24.1551, "GAIN": 14.4684, "CHANGED": -1.144026361, "UNCHANGED": 8.4672 },
  { "CLASS_NAME": "SHRUB", "LOSS": 65.4255, "GAIN": 63.6885, "CHANGED": -0.055945272, "UNCHANGED": 31.0482 },
  { "CLASS_NAME": "BARELAND", "LOSS": 24.12, "GAIN": 32.1408, "CHANGED": 0.847228824, "UNCHANGED": 9.4671 },
  { "CLASS_NAME": "WATERBODY", "LOSS": 24.4719, "GAIN": 21.1896, "CHANGED": -0.172590034, "UNCHANGED": 19.0179 },
  { "CLASS_NAME": "VEGETATION", "LOSS": 70.5825, "GAIN": 72.6372, "CHANGED": 0.041618055, "UNCHANGED": 49.3704 }
];

// Table Rendering
const tableHead = document.getElementById("table-head");
const tableBody = document.getElementById("data-table");

tableHead.innerHTML = `<tr>
  <th>Class Name</th>
  <th>Loss</th>
  <th>Gain</th>
  <th>Changed Index</th>
  <th>Unchanged</th>
</tr>`;

tableBody.innerHTML = data.map(row => `
  <tr>
    <td>${row.CLASS_NAME}</td>
    <td>${row.LOSS.toFixed(2)}</td>
    <td>${row.GAIN.toFixed(2)}</td>
    <td>${row.CHANGED.toFixed(2)}</td>
    <td>${row.UNCHANGED.toFixed(2)}</td>
  </tr>
`).join("");

// Grouped Bar Chart
Plotly.newPlot('barChart', [
  {
    x: data.map(d => d.CLASS_NAME),
    y: data.map(d => d.GAIN),
    name: 'Gain',
    type: 'bar',
    marker: { color: 'green' }
  },
  {
    x: data.map(d => d.CLASS_NAME),
    y: data.map(d => d.LOSS),
    name: 'Loss',
    type: 'bar',
    marker: { color: 'red' }
  }
],);

// Pie Chart (Dropdown Controlled)
function updatePieChart(valueType) {
  const values = data.map(d => valueType === "Changed"
    ? Math.abs(d.CHANGED)
    : d.UNCHANGED);
  const labels = data.map(d => d.CLASS_NAME);

  Plotly.newPlot('pieChart', [{
    values: values,
    labels: labels,
    type: 'pie',
    hole: 0.4
  }],);
}

document.getElementById("valueTypeSelect").addEventListener("change", (e) => {
  updatePieChart(e.target.value);
});

// Initial Load
updatePieChart("Changed");

// Dark Mode Toggle
document.getElementById("toggleDarkMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});















  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  