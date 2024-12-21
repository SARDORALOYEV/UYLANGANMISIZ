let ball = +prompt("O'zingizning ballingizni kiriting:");

if (ball > 80) {
    alert("Tabriklaymiz! Ballingiz yetarli!");
    let uylanganmi = confirm("Uylanganmisiz?");
    if (uylanganmi) {
        alert("Kechirasiz, uylanganlarni o‘qishga olmaymiz.");
    } else {
        alert("Tabriklaymiz! Siz o‘qishga qabul qilindingiz.Chunki siz hali bo'ydoqsiz!😁Tembole ballingiz yuqori!🥷🏻");
    }
} else {
    alert("Afsus, sizning natijangiz 80 dan past.");
    let uylanganmi = confirm("Uylanganmisiz?");
    if (!uylanganmi) {
        alert("Tabriklaymiz! Siz o‘qishga qabul qilindingiz.Chunki siz hali bo'ydoqsiz!😁");
    } else {
        alert("Kechirasiz, uylanganlarni o‘qishga olmaymiz.👰🏿‍♀️🤵🏻 Tembole ballingiz past!");
    }
   confirm("Happy new year jigar!🎅🏻")
}
