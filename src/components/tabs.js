import axios from 'axios'

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  // Elements
  const topic = document.createElement('div')
  const tab1 = document.createElement('div')
  const tab2 = document.createElement('div')
  const tab3 = document.createElement('div')
  const tab4 = document.createElement('div')
  const tab5 = document.createElement('div')

  // Appending
  topic.append(tab1)
  topic.append(tab2)
  topic.append(tab3)
  topic.append(tab4)
  topic.append(tab5)

  // classNames
  topic.className = 'topics'
  tab1.className = 'tab'
  tab2.className = 'tab'
  tab3.className = 'tab'
  tab4.className = 'tab'
  tab5.className = 'tab'

  // TextContent
  tab1.textContent = topics[0]
  tab2.textContent = topics[1]
  tab3.textContent = topics[2]
  tab4.textContent = topics[3]
  tab5.textContent = topics[4]

  return topic

}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  axios.get(`http://localhost:5000/api/topics`)
  .then(res => {
    const tabsData = res.data.topics;
    console.log(tabsData)

    const tabsArray = document.querySelector(selector)
    tabsArray.appendChild(Tabs(tabsData))
  })

}

export { Tabs, tabsAppender }
