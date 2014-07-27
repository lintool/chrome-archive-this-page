function genericOnClick(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));

  chrome.tabs.create({ 
    url: "http://web.archive.org/save/" + info.pageUrl,
  });
}

chrome.contextMenus.create({
  "title": "Save this page to the Internet Archive",
  "contexts": ["page"],
  "onclick": genericOnClick}
);
