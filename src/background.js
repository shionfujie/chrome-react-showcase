/*global chrome*/

import queryActiveTab from './chrome/tabs/queryActiveTab'

chrome.runtime.onConnect.addListener(({ name, onMessage }) => {
  if (name == 'chrome-react-showcase')
    onMessage.addListener(message => {
      console.log(message.message)
      console.log('Thanks, content.js -- received in background.js')
      queryActiveTab(activeTab => {
          console.log('[INFO] TAB ID: ' + activeTab.id)
      })
    });
});
