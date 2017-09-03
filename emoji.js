function emojiSrc(categoryID, emojiID) {
  return "<a href='http://emojis.appstone.net' target='_blank' title='AppStone Emoji - " + emojis[categoryID].name + " - " + emojis[categoryID].items[emojiID].name + "'><img src='http://emojis.appstone.net/icons/" + emojis[categoryID].path + "/" + emojis[categoryID].items[emojiID].path + "' class='appstoneEmoji' alt='-" + emojis[categoryID].items[emojiID].name + "-' /></a>";
}

function createEmojis() {
  var counter = 0;
  var emojiPlaceholders = document.getElementsByClassName("asEmojiPlaceholder");
  while (counter < emojiPlaceholders.length) {
    emojiPlaceholders[counter].innerHTML = emojiPlaceholders[counter].innerHTML + emojiSrc(emojiPlaceholders[counter].getElementsByTagName("span")[0].innerHTML, emojiPlaceholders[counter].getElementsByTagName("span")[1].innerHTML);
    emojiPlaceholders[counter].getElementsByTagName("span")[0].style.display = "none";
    emojiPlaceholders[counter].getElementsByTagName("span")[1].style.display = "none";
    counter = counter + 1;
  }
}
