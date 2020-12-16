let xml = new XMLHttpRequest()
let n = 1;
getPage.onclick = () => {
  xml.open('GET', `/page${n+=1}`)
  xml.onreadystatechange = () => {
    if (xml.readyState === 4 && xml.status === 200) {
      const arr = JSON.parse(xml.response)
      const ul = document.createElement("ul")
      arr.map(item => {
        const li = document.createElement("li")
        li.innerHTML = item.id
        ul.appendChild(li)
      })
      pages.appendChild(ul)
    }
  }
  xml.send()
};
getJSON.onclick = () => {
  xml.open("GET", "/5.json")
  xml.onreadystatechange = () => {
    if (xml.readyState === 4 && xml.status === 200) {
      console.log(typeof xml.response)
      console.log(xml.response)
      const res = JSON.parse(xml.response)
      console.log(typeof res)
      console.log(res)
    }
  }
  xml.send()
};
getXML.onclick = () => {
  xml.open('GET', "/4.xml")
  xml.onreadystatechange = () => {
    if (xml.readyState === 4 && xml.status === 200) {
      text.innerText = xml.responseXML.getElementsByTagName("warning")[0].textContent.trim()
    }
  }
  xml.send()
};
getHTML.onclick = () => {
  xml.open("GET", "./3.html")
  xml.onreadystatechange = () => {
    if (xml.readyState === 4 && xml.status === 200) {
      myName.innerHTML = xml.response
    }
  }
  xml.send()
};
getJS.onclick = () => {
  xml.open("GET", '/2.js')
  xml.onreadystatechange = () => {
    if (xml.readyState === 4 && xml.status === 200) {
      const script = document.createElement("script")
      script.src = './2.js'
      document.body.appendChild(script)
    }
  }
  xml.send()
};

getCSS.onclick = () => {
  xml.open("GET", '/style.css')
  xml.onreadystatechange = () => {
    if (xml.readyState === 4) {
      if (xml.status >= 200 && xml.status < 300) {
        const link = document.createElement("link")
        link.rel = 'stylesheet';
        link.href = './style.css'
        document.head.appendChild(link)
      }
    }
  }
  xml.send()
};