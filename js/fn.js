(function(answerlyScriptName) {
if (!window.isAnswerlyManagerRunning) {
window.isAnswerlyManagerRunning = true;
var company = document.querySelector('[src^="' + answerlyScriptName + 
'"]').getAttribute('src').split('company=')[1];
var answerlyInstall = document.createElement('script');
answerlyInstall.src = 'https://' + company + '.answerly.io/fn.js';
answerlyInstall.setAttribute('async', true);
document.body.insertAdjacentElement('beforeend', answerlyInstall);
}})("https://answerly.cloud/fn.js");