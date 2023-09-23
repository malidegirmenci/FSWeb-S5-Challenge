import axios from 'axios';
const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const divHeadline = document.createElement("div");
  divHeadline.classList.add("headline");
  divHeadline.textContent = makale.anabaslik;

  const divAuthor = document.createElement("div");
  divAuthor.classList.add("author");

  const divImgContainer = document.createElement("div");
  divImgContainer.classList.add("img-container");

  const imgAuthor = document.createElement("img");
  imgAuthor.src = `${makale.yazarFoto}`;

  divImgContainer.appendChild(imgAuthor);

  const spanWriter = document.createElement("span");
  spanWriter.textContent = `${makale.yazarAdi}`;

  divAuthor.append(divImgContainer, spanWriter);

  divCard.append(divHeadline, divAuthor);
  divCard.addEventListener("click", () => {
    console.log(` ${makale.anabaslik}`)
  })
  return divCard;
}





const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const cardContainer = document.querySelector(secici);
  axios.get("http://localhost:5001/api/makaleler").then((res) => {
    const arrArticles = Object.values(res.data.makaleler).flat();
    arrArticles.forEach((item) => {
      cardContainer.append(Card(item));
    })
  })
}

export { Card, cardEkleyici }
