asemojis.createEmojis = function () {
  var emojiPlaceholders = document.getElementsByClassName("asEmojiPlaceholder");
  while (0 < emojiPlaceholders.length) {
    var categoryID = emojiPlaceholders[0].getElementsByTagName("span")[0].innerHTML;
    var emojiID = emojiPlaceholders[0].getElementsByTagName("span")[1].innerHTML;
    emojiPlaceholders[0].outerHTML = "<a href='http://emojis.appstone.net' target='_blank' title='AppStone Emoji - " + asemojis.emojiData[categoryID].name + " - " + asemojis.emojiData[categoryID].items[emojiID].name + "'><img src='http://emojis.appstone.net/icons/" + asemojis.emojiData[categoryID].path + "/" + asemojis.emojiData[categoryID].items[emojiID].path + "' class='appstoneEmoji' alt='-" + asemojis.emojiData[categoryID].items[emojiID].name + "-' /></a>";
  }
}
