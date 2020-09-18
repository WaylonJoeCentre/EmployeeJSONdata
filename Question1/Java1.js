var alldata = d3.json("../employee.json");

var successFCN = function(employee){
    console.log("Data collected", employee);
var getimage = function(pic){return pic.photo};
    
    var allrows = d3.select("#stafftable")
    .selectAll("tr")
    .data(employee)
    .enter()
    .append("tr")

    allrows.append("td")
        .text(function(fname){return fname.firstName;})
    allrows.append("td")
        .text(function(lname){return lname.lastName;})
    allrows.append("td")
        .append("img").attr("src",getimage)
        .text(getimage)
    allrows.append("td")
        .text(function(bigname){return bigname.title;})
    allrows.append("td")
        .text(function(subject){return subject.unit;})
    allrows.append("td")
        .text(function(contact){return contact.email;})
    allrows.append("td")
        .text(function(info){return info.bio;})
    allrows.append("td")
        .text(function(number){return number.phone;})
    }

var failFCN = function(errorMsg){
    console.log("Something went wrong",errorMsg);
}

alldata.then(successFCN,failFCN);

