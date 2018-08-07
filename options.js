/* eslint-disable */

// Saves options to chrome.storage
function save_options() {
    var github_token = document.getElementById('github_access_token').value;
    var hide_labels_on_closed_prs = document.getElementById('hide_labels_on_closed_prs').checked;
    var hide_closed_prs = document.getElementById('hide_closed_prs').checked;
    chrome.storage.sync.set({
        github_access_token: github_token,
        hide_labels_on_closed_prs: hide_labels_on_closed_prs,
        hide_closed_prs: hide_closed_prs
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 1250);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
        github_access_token: '',
        hide_labels_on_closed_prs: true,
        hide_closed_prs: false
    }, function (items) {
        document.getElementById('github_access_token').value = items.github_access_token;
        document.getElementById('hide_labels_on_closed_prs').checked = items.hide_labels_on_closed_prs;
        document.getElementById('hide_closed_prs').checked = items.hide_closed_prs;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
