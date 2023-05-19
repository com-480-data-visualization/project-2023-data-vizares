// Wait for the HTML and CSS to load before running JavaScript
document.addEventListener("DOMContentLoaded", function () {

    // Define variables for the map container and switch button
    const mapContainer = document.querySelector(".map");
    mapContainer.style.borderRadius = "0";

    // Define variables for the five other buttons
    const button1 = document.querySelector("#button-1");
    const button2 = document.querySelector("#button-2");
    const button3 = document.querySelector("#button-3");
    const button4 = document.querySelector("#button-4");
    const button5 = document.querySelector("#button-5");
    const resetButton = document.querySelector("#button-logo");

    const helpButton = document.getElementById("button-help");
    const helpWindow = document.getElementById("helpWindow");
    const closeButton = document.getElementById("closeButton");

    let previousLayer;

    // Add click event listeners to the five buttons
    button1.addEventListener("click", function () {
        // Change the graph display to show statistics related to button 1
        updateGraph(1);
        updateButton(1);
    });

    button2.addEventListener("click", function () {
        // Change the graph display to show statistics related to button 2
        updateGraph(2);
        updateButton(2);
    });

    button3.addEventListener("click", function () {
        // Change the graph display to show statistics related to button 3
        updateGraph(3);
        updateButton(3);
    });

    button4.addEventListener("click", function () {
        // Change the graph display to show statistics related to button 4
        updateGraph(4);
        updateButton(4);
    });

    button5.addEventListener("click", function () {
        // Change the graph display to show statistics related to button 5
        updateGraph(5);
        updateButton(5);
    });

    resetButton.addEventListener("click", function () {
        updateGraph(-1);
        updateButton(-1);
    });

    helpButton.addEventListener("click", function () {
        helpWindow.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        helpWindow.style.display = "none";
    });

    //We want to create a function that will make it so that when the user has scrolled passed a threshold the buttons start to follow him

    var buttonContainer = document.querySelector('.button-container');
    var originalPosition = buttonContainer.offsetTop;

    window.addEventListener('scroll', function () {
        var currentPosition = window.pageYOffset || document.documentElement.scrollTop;

        if (currentPosition > originalPosition) {
            buttonContainer.classList.add('sticky');
            // buttonContainer.classList.add('sticky-top'); // Add this line
        } else {
            buttonContainer.classList.remove('sticky');
            // buttonContainer.classList.remove('sticky-top'); // Add this line
        }
    });

    function updateButton(buttonNumber) {
        // Deselect all buttons
        const buttons = document.querySelectorAll(".button-container button");
        buttons.forEach(button => {
            button.classList.remove("selected");
        });

        if (buttonNumber === -1) {
            return;
        }
        // Select the clicked button if not already selected (if already selected, deselect all buttons)
        const clickedButton = document.querySelector(`#button-${buttonNumber}`);
        if (!clickedButton.classList.contains("selected")) {
            clickedButton.classList.add("selected");
        } else {
            buttons.forEach(button => {
                button.classList.remove("selected");
            });
        }

        const graph = document.querySelector("#graph");
        graph.classList.remove("fade-in");
        graph.textContent = `Graph for Button ${buttonNumber}`;
        graph.classList.add("fade-in");
    }

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    const countryNames = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia-Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Czechoslovakia', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Germany (GDR)', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guadeloupe', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'International', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Martinique', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nepal', 'Netherlands', 'New Caledonia', 'New Hebrides', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Yemen', 'Norway', 'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay', "People's Republic of the Congo", 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Republic of the Congo', 'Rhodesia', 'Romania', 'Russia', 'Rwanda', 'Saudi Arabia', 'Senegal', 'Serbia', 'Serbia-Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovak Republic', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'South Yemen', 'Soviet Union', 'Spain', 'Sri Lanka', 'St. Kitts and Nevis', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Wallis and Futuna', 'West Bank and Gaza Strip', 'West Germany (FRG)', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zaire', 'Zambia', 'Zimbabwe']
    const regionNames =['Australasia & Oceania','Central America & Caribbean','Central Asia','East Asia','Eastern Europe','Middle East & North Africa','North America','South America','South Asia','Southeast Asia','Sub-Saharan Africa','Western Europe']

    function updateGraph(buttonNumber) {

        const textContainer = document.querySelector(".text-container");
        const graphContainer = document.querySelector(".graph-container");
        
        switch (buttonNumber) {
            case 1:
                while (imageContainer.firstChild) {
                    imageContainer.removeChild(imageContainer.firstChild);
                  }
                  textContainer.innerHTML = "<p>The first step into studying the nature of terrorist attacks was to study the groups that perpetrated them. We therefore present you a graph listing the terrorist organisations with the most casualties. Next to it we deemed interesting to study the weapons used most commonly by these groups which we represented by a heatmap.</p> <div class='graph1' style='border: 3px solid #3C3C3C; border-radius: 15px;'> </div> <div class='graph2' style='border: 3px solid #3C3C3C; border-radius: 15px;'> </div>";
                

                d3.csv("https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/Alex/data/miscellaneous/fatalities_per_group.csv")
                  .then(data => {
                    plotData(processData(data));
                  })
                  .catch(error => console.error('Error:', error))

              
              // Fetch and process heatmap_data_pivot.csv
                d3.csv("https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/Alex/data/heatmap/heatmap_data.csv")
                  .then(data => {
                      plotHeatmap(processHeatmap(data));
                  })
                  .catch(error => console.error('Error:', error));
              
                function processHeatmap(data) {
                    data.forEach(d => {
                        d.count = +d.count; // unary plus operator converts string to number
                    });
                    return data;
                }
                
                function processData(data) {
                    // Sort the data by nkill descending and slice the first 10
                    let top10 = data.sort((a, b) => b.nkill - a.nkill).slice(0, 10);

                    return top10;
                }
                  break;
            case 2:
                while (imageContainer.firstChild) {
                    imageContainer.removeChild(imageContainer.firstChild);
                }
    
                textContainer.innerHTML = "<p>We found interesting to study terrorism and its evolution by visualizing the activity of terrorist groups through the years on the globe.</p>";
    
                // Create a slider
                const slider = document.createElement('input');
                slider.type = 'range';
                slider.min = '1970';
                slider.max = '2020';
                slider.value = '1990';
                slider.classList.add('slider');
    
                // Create a label to display the slider value
                const sliderLabel = document.createElement('span');
                sliderLabel.innerHTML = `Year: ${slider.value}`;
                sliderLabel.classList.add('slider-label');
    
                // Add an event listener to update the label when the slider value changes
                slider.addEventListener('input', () => {
                    sliderLabel.innerHTML = `Year: ${slider.value}`;
                });
    
                // Append the slider and label to the imageContainer
                imageContainer.appendChild(slider);
                imageContainer.appendChild(sliderLabel);
    
                // Append the imageContainer to the graphContainer
                graphContainer.appendChild(imageContainer);
                // ... (the rest of the cases remain the same)
                break;
            case 3:
                while (imageContainer.firstChild) {
                    imageContainer.removeChild(imageContainer.firstChild);
                }
                textContainer.innerHTML = "<p>Before delving deeper in the analysis of the data we tried figuring out if there were specific trends in when the attacks were committed during the year</p>";
                if (!imageContainer.hasChildNodes()) {
                    // add image to the map container
                    const image1 = document.createElement('img');   // Should not be created every time
                    const image2 = document.createElement('img');   // Should not be created every time
                    image1.src = 'images/plot1page3.png';
                    image1.alt = 'Image 1';
                    image2.src = 'images/plot2page3.png';
                    image2.alt = 'Image 2';
                    
                    const imageContainer1 = document.createElement('div');
                    imageContainer1.classList.add('image-container');
                    imageContainer1.appendChild(image1);
                    const imageContainer2 = document.createElement('div');
                    imageContainer2.classList.add('image-container');
                    imageContainer2.appendChild(image2);
                    
                    imageContainer.appendChild(imageContainer1);
                    imageContainer.appendChild(imageContainer2);
                    graphContainer.appendChild(imageContainer);
                }
                break;
            case 4:
                while (imageContainer.firstChild) {
                    imageContainer.removeChild(imageContainer.firstChild);
                }
                textContainer.innerHTML = "<p>To truly understand the dynamics of each region of the world we added their growth tendencies of terrorist activities.</p>";
                
                                // Create a dropdown menu (select element)
                const regionSelect = document.createElement('select');
                regionSelect.classList.add('region-select');
        
                // Create an img element to display the region image
                const regionImage = document.createElement('img');
                regionImage.classList.add('region-image');
        
                // Populate the dropdown menu with region options
                regionNames.forEach(region => {
                    const regionOption = document.createElement('option');
                    regionOption.value = region;
                    regionOption.text = region;
                    regionSelect.appendChild(regionOption);
                });
        
                // Add an event listener to update the displayed image based on the selected country
                regionSelect.addEventListener('change', () => {
                    // Update the image source (modify this to match your actual file paths and naming conventions)
                    regionImage.src = `/data/regions/${regionSelect.value.replace(/ /g, '_')}.png`;
                    regionImage.alt = regionSelect.value;
                });
        
                // Append the dropdown menu and the image to the imageContainer
                imageContainer.appendChild(regionSelect);
                imageContainer.appendChild(regionImage);
        
                // Append the imageContainer to the graphContainer
                graphContainer.appendChild(imageContainer);
                
                break;
            case 5:
                while (imageContainer.firstChild) {
                    imageContainer.removeChild(imageContainer.firstChild);
                }
                textContainer.innerHTML = "<p>Lastly, in order to give as much information as possible we have added statistics on the different countries</p><div class='graph3' style='border: 3px solid #3C3C3C; border-radius: 15px;'> </div>";

                // Create a dropdown menu (select element)
                const countrySelect = document.createElement('select');
                countrySelect.classList.add('country-select', 'pretty-select');
        
                // Create an img element to display the country image
                const countryImage = document.createElement('img');
                countryImage.classList.add('country-image');

                // Create a placeholder option
                const placeholderOption = document.createElement('option');
                placeholderOption.text = "Please select a country..."; 
                placeholderOption.value = "";
                placeholderOption.disabled = true;
                placeholderOption.selected = true;
                placeholderOption.hidden = true;
                countrySelect.appendChild(placeholderOption);
        
                // Populate the dropdown menu with country options
                countryNames.forEach(country => {
                    const countryOption = document.createElement('option');
                    countryOption.value = country;
                    countryOption.text = country;
                    countrySelect.appendChild(countryOption);
                });
        
                // Add an event listener to update the displayed image based on the selected country
                countrySelect.addEventListener('change', () => {
                    // Update the image source (modify this to match your actual file paths and naming conventions)
                    //countryImage.src = `/data/countries/${countrySelect.value.replace(/ /g, '_')}.png`;
                    //countryImage.alt = countrySelect.value;
                    const selectedCountry = countrySelect.value.replace(/ /g, '%20');
                    //const imageUrl = `/data/countries/${selectedCountry}.png`;
                    const dataUrl = `https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/Aristotelis/data/streamgraph/${selectedCountry}.csv`;
                    // const dataUrl = `https://raw.githubusercontent.com/com-480-data-visualization/project-2023-data-vizares/Alex/data/countries/${selectedCountry}/${selectedCountry}_yearly_monthly.csv`;
                    d3.csv(dataUrl)	
                    .then(data => {
                        console.log(data)
                        const processedData = processCountryData(data);
                        plotStreamgraph(data);
                    })
                    .catch(error => console.error('Error:', error));
                    
                });
        
                // Append the dropdown menu and the image to the imageContainer
                imageContainer.appendChild(countrySelect);
                imageContainer.appendChild(countryImage);
        
                // Append the imageContainer to the graphContainer
                graphContainer.appendChild(imageContainer);

                
                
                break;
            default:
                textContainer.innerHTML = `<p>Welcome to "Mapping the Shadows: An Interactive Journey Through Five Decades of Global
                            Terrorism", an interactive data
                            visualization project that invites you to explore the complex landscape of global terrorism
                            from 1970 to 2020. By
                            leveraging the power of the Global Terrorism Database(GTD), our goal is to provide an
                            engaging and informative
                            experience that sheds light on the trends, patterns, and impacts of terrorist activities
                worldwide.<br>
                    In this project, you will find a variety of visualizations, including histograms, heatmaps,
                        and parallel coordinate
                plots, all designed to present the data in a clear and accessible manner.At the heart of
                            our project is an
                            interactive map that adapts to your selections, allowing you to examine different aspects of
                terrorism, such as the
                            density of attacks, fatalities per country, and seasonality, among others.<br>
                    We believe that understanding the historical context and trends of terrorism is essential
                for
                            fostering informed
                            conversations and decision - making in our increasingly interconnected world.Please note that
                this project deals with
                            sensitive subject matter, and we have made every effort to present the information in an
                            unbiased and respectful
                manner.<br>
                    To begin your exploration, simply scroll down and interact with the visualizations below.If
                            you need help navigating
                            the website or understanding the visualizations, you can access our help guide by clicking
                            the button in the
                top - right corner of the page.<br>
                    We hope that this project provides you with valuable insights and encourages thoughtful
                            reflection on the complex
                            phenomenon of terrorism.</p>`;
        }

    }

    function plotData(data) {
        // Set the dimensions and margins of the graph
        const width = 600;
        const height = 400;

        var margin = {top: 10, right: 10, bottom: 10, left: 235};
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const tooltip = d3.select("body")
            .append("div")
            .attr("class", "tooltip-bar")
            .style("opacity", 0);

        const svg = d3.select(".graph1");

        const g = svg.append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);
            
        
        const xValue = d => +d.nkill;
        const yValue = d => d.gname;

        const xScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => xValue(d))])
            .range([0, innerWidth]);

        const yScale = d3.scaleBand()
            .domain(data.map(d => yValue(d)))
            .range([0, innerHeight])
            .padding(0.1);

        g.append('g').call(d3.axisBottom(xScale).tickFormat(d3.format('.2s')))
            .attr('transform', `translate(0, ${innerHeight})`);
        g.append('g').call(d3.axisLeft(yScale));

        g.selectAll('rect').data(data)
            .enter().append('rect')
            .attr('y', d => yScale(d.gname))
            .attr('width', xScale(0))
            .attr('height', yScale.bandwidth())
            .attr('x', xScale(0))
            .attr("fill", (d, i) => d3.interpolateSpectral(i / data.length))
            .on("mouseover", function(event, d) {
                // Load the effect of hovering on the bar
                d3.select(this).classed("hovered-bar", true);

                // Make tooltip visible
                tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                // Update tooltip content
                tooltip.html(`<p><b>Group Name:</b> ${d.gname}</p>
                        <p><b>Number of Fatalities:</b> ${Number(d.nkill).toFixed(0)}</p>`)
                    .style("left", `${event.pageX}px`)
                    .style("top", `${event.pageY - 28}px`)
                    .style("background-color", d3.select(this).attr("fill"))
                    .style("border-color", d3.select(this).attr("fill"))
                    .style("weight", "12px")
                    .style("border-style", "solid");
            })
            .on("mouseout", function(d) {
                // Remove the effect of hovering on the bar
                d3.select(this).classed("hovered-bar", false);
                // Make tooltip invisible
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });

        // Animation
        g.selectAll("rect")
            .transition()
            .duration(800)
            .attr("x", d => 0)
            .attr("width", d => xScale(+d.nkill))
            .delay(function(d,i){ return (i * 100) });
    }

    function plotHeatmap(data) {
        const width = 450;
        const height = 450;

        var margin = { top: 30, right: 30, bottom: 130, left: 150 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const tooltip = d3.select("body")
            .append("div")
            .attr("class", "tooltip-heatmap")
            .style("opacity", 0);

        var svg = d3
            .select(".graph2")
            .append("svg")
            .attr("width", innerWidth + margin.left + margin.right)
            .attr("height", innerHeight + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        const xValue = d => d.gname;
        const yValue = d => d.weapsubtype1_txt;
        const count = d => d.count;

        var x = d3.scaleBand()
            .range([0, innerWidth])
            .domain(data.map(d => xValue(d)))
            .padding(0.01);
        svg.append("g")
            .attr("transform", "translate(0," + innerHeight + ")")
            .call(d3.axisBottom(x));

        var y = d3.scaleBand()
            .range([innerHeight, 0])
            .domain(data.map(d => yValue(d)))
            .padding(0.01);
        svg.append("g")
            .call(d3.axisLeft(y));

        var myColor = d3.scaleLinear()
            .range(["white", "#69b3a2"])
            .domain([1, 1500]);

        let gnameMapping = {};
        let weapsubtype1_txtMapping = {};
        let gnameCounter = 0;
        let weapsubtype1_txtCounter = 0;

        data.forEach(d => {
            if (!gnameMapping[d.gname]) {
                gnameMapping[d.gname] = 'gname' + gnameCounter++;
            }
            if (!weapsubtype1_txtMapping[d.weapsubtype1_txt]) {
                weapsubtype1_txtMapping[d.weapsubtype1_txt] = 'weapsubtype' + weapsubtype1_txtCounter++;
            }
        });

        svg.selectAll()
            .data(data, function (d) { return d.gname + ':' + d.weapsubtype1_txt; })
            .enter()
            .append("rect")
            .attr("x", function (d) { return x(d.gname) })
            .attr("y", function (d) { return y(d.weapsubtype1_txt) })
            .attr("width", x.bandwidth())
            .attr("height", y.bandwidth())
            .attr("rx", 4)
            .attr("ry", 4)
            .attr("class", function (d) { return `${gnameMapping[d.gname]} ${weapsubtype1_txtMapping[d.weapsubtype1_txt]}` })
            .style("fill", function (d) { return myColor(d.count) })
            .on("mouseover", function (event, d) {
                d3.selectAll('rect')
                    .transition().duration(200)
                    .style("filter", "brightness(0.9)")
                    .style("stroke", "none")
                    .style("stroke-width", "0px");

                d3.selectAll(`.${gnameMapping[d.gname]}`)
                    .transition().duration(200)
                    .style("filter", "brightness(1)")
                    .style("stroke", "black")
                    .style("stroke-width", "1px");

                d3.selectAll(`.${weapsubtype1_txtMapping[d.weapsubtype1_txt]}`)
                    .transition().duration(200)
                    .style("filter", "brightness(1)")
                    .style("stroke", "black")
                    .style("stroke-width", "1px");

                tooltip.transition()
                    .duration(200)
                    .style("opacity", 0.9);
                tooltip.html(`<p> The <b>${d.gname}</b> group <br> used <b>${d.weapsubtype1_txt}</b> ${d.count} times</p>`)
                    .style("left", `${event.pageX}px`)
                    .style("top", `${event.pageY - 28}px`)
                    .style("background-color", d3.select(this).attr("fill"))
                    .style("border-color", myColor(d.count))
                    .style("weight", "12px")
                    .style("border-style", "solid");
            })
            .on("mousemove", function (event, d) {
                tooltip.style("left", `${event.pageX}px`)
                    .style("top", `${event.pageY - 28}px`);
            })
            .on("mouseout", function (d) {
                d3.selectAll('rect')
                    .transition().duration(200)
                    .style("filter", "brightness(1)")
                    .style("stroke", "none")
                    .style("stroke-width", "0px")

                tooltip.style("opacity", 0);
            })
    }
    
    // Define the map object and add it to the "map" div container
    var mymap = L.map('map').setView([46.5197, 6.6323], 13);
    // Add the tile layer to the map
    //L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //    maxZoom: 18,
    //    tileSize: 512,
    //    zoomOffset: -1
    //}).addTo(mymap);


    // We want to highlight france when clicking on the button "button1"
    mymap.createPane('labels');
    mymap.getPane('labels').style.zIndex = 650;
    mymap.getPane('labels').style.pointerEvents = 'none';


    var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
    }).addTo(mymap);

    var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels'
    }).addTo(mymap);

    var geojson = L.geoJson(GeoJsonData, geoJsonOptions).addTo(mymap);

    geojson.eachLayer(function (layer) {
        layer.bindPopup(layer.feature.properties.name);
    });

    mymap.fitBounds(geojson.getBounds());

    var geojson = L.geoJson(GeoJsonData, geoJsonOptions).addTo(mymap);

});


function processCountryData(data) {


    let result = [];
    let years = [...new Set(data.map(item => item.iyear))]; // get unique years

    // initialize result with years and empty months
    years.forEach(year => {
        let row = { Year: year };
        for (let i = 1; i <= 12; i++) {
            row[i] = 0; // initialize months to 0
        }
        result.push(row);
    });

    // fill the result with data
    data.forEach(item => {
        let row = result.find(r => r.Year === item.iyear);
        if (row) {
            row[item.imonth] = item.count;
        }
    });

    // Convert month numbers to names
    result = result.map(row => {
        let newRow = { Year: row.Year };
        // let months = [null, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let months = [null, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        for (let i = 1; i <= 12; i++) {
            newRow[months[i]] = row[i];
        }
        return newRow;
    });

    let output = [];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    let yearsSet = new Set();
    result.forEach(obj => yearsSet.add(obj.Year));
    let years_ = [...yearsSet];

    let columns = ['Month', ...years_];

    months.forEach(month => {
        let newObj = { Month: month };

        result.forEach(obj => {
            newObj[obj.Year] = obj[month];
        });

        output.push(newObj);
    });

    


    return { columns, output };
}

function plotStreamgraph(data) {
    const width = 460;
    const height = 400
    var margin = {top: 20, right: 30, bottom: 10, left: 75};        
    var innerWidth = width - margin.left - margin.right;
    var innerHeight = height - margin.top - margin.bottom;

    // Calculate list of total per month
    const countsByMonth = Array(12).fill(0); // Initialize an array to store counts for each month (assuming 12 months)

    data.forEach(obj => {
        const monthIndex = parseInt(obj.imonth) - 1; // Get the month index (subtract 1 since JavaScript uses zero-based indexing)
        const values = Object.values(obj).slice(1, 32); // Get the values for each day of the month

        const monthCount = values.reduce((acc, val) => acc + parseFloat(val), 0); // Calculate the sum of values for the month
        countsByMonth[monthIndex] += monthCount; // Add the month count to the corresponding index in the countsByMonth array
    });    

    var svg = d3.select(".graph3")
      .append("svg")
        .attr("width", innerWidth + margin.left + margin.right)
        .attr("height", innerHeight + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var keys = data.columns.slice(1);   // Month names

    var x = d3.scaleLinear()
        .domain([1, 12])
        .range([0, innerWidth]);
    svg.append("g")
        .attr("transform", "translate(0," + innerHeight * .8 + ")")
        .call(d3.axisBottom(x).tickSize(-innerHeight * .7))
        .select(".domain")
        .remove();

    svg.selectAll(".tick line").attr("stroke", "#b8b8b8");  // Vertical grid lines above month names

    // Add X axis label:
    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", 2*innerWidth/3)
        .attr("y", innerHeight - 30 )
        .text("Time (month)");

    var y = d3.scaleLinear()
        .domain([-d3.max(countsByMonth), d3.max(countsByMonth)])
        .range([ innerHeight, 0 ]);
    svg.append("g")
        .call(d3.axisLeft(y))
        .attr("transform", "translate(-25, 0)");

    var color = d3.scaleOrdinal()
        .domain(keys)
        .range(d3.schemeDark2);

    var stackedData = d3.stack()
        .offset(d3.stackOffsetSilhouette)
        .keys(keys)
        (data);

    var tooltip = svg
        .append("text")
        .attr("x", 0)
        .attr("y", 0)
        .style("opacity", 0);

    
    var area = d3.area()
        .x(function(d) { return x(d.data.imonth); })
        .y0(function(d) { return y(d[0]); })
        .y1(function(d) { return y(d[1]); });

    svg.selectAll("mylayers")
        .data(stackedData)
        .enter()
        .append("path")
            .attr("class", "myArea") 
            .style("fill", function(d) { return color(d.key); })
       .attr("d", area)
       .on("mouseover", function(d) {
            tooltip.style("opacity", 1)
            d3.selectAll(".myArea").style("opacity", .2)
            d3.select(this)
                .style("stroke", "black")
                .style("opacity", 1)
        })
       .on("mousemove", function(d,i) {
           grp = keys[i]
           console.log(grp)
           tooltip.text(grp)
        })
       .on("mouseleave", function(d) {
            tooltip.style("opacity", 0)
            d3.selectAll(".myArea").style("opacity", 1).style("stroke", "none")
        });
}