/**
 * Daha once hiç parametre olarak bir fonksiyon alıp onunla çalışmamıştım
 * fakat bu high-order fuctionların nasıl calıstıgına dair fikrim var
 * fonksiyonu parametre olarak alıp işleme koymayı internetten öğrenip anladığım kadarı ile bir şeyler yapmaya çalıştım
 * native method olarak sadece array push kullandım umarım ona izin vardır :)
 */

class Cakma {
  /**
   * filtreleme için gerekli olan şeyler filtrelencek array,
   * her eleman için kontrol gercekleştireceğimiz bir function
   * ve bu fonksiyonun return edilen şart sonucu
   * @param {Array} arr array alıyoruz
   * @param {Function} func fonksiyonu alıyoruz
   * @param {any} sart fonksiyon şartını alıyoruz
   */
  filterCakmasi(arr, func, sart) {
    let filteredArr = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      //fonksiyona suanki array elemanını gonderiyoruz ve şart ile kontrol ettırıp true donerse yeni arrayimize pushluyoruz
      if (func.call(sart, arr[i])) filteredArr.push(arr[i]);
    }
    return filteredArr;
  }

  /**
   * map için filtreleme ile aynı şeyler gerekli aslında sadece doğru yanlış kontrolu yapmadan
   * aldığımız fonksiyonun return une gore yeni array dondurmemız lazım sadece
   * @param {Array} arr array alıyoruz
   * @param {Function} func fonksiyonu alıyoruz
   * @param {any} icerik fonksiyon return ü
   */
  mapCakmasi(arr, func, icerik) {
    let mappedArr = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      mappedArr.push(func.call(icerik, arr[i]));
    }
    return mappedArr;
  }

  /**
   * Şöyle bir mantık yürüttüm;
   * Önclikle aldığımız arr i bir değişkene atıyorum
   * Bu değişni uzunlugu 1 olana kadar foksiyonun returun'undeki işleme sokup 2 li 2 li azaltıyorum
   * en sonda da arrayın 1. elemanını donduruyorum
   * Açıklama;
   * ilk önce şuanki değeri arrayın başına koydum ki o degerden başlasın
   * daha sonra while dongusunde suanki deger değişkenini reducedArr[0] ve reducedArr[1] in
   * fonksiyon sartı ile işleme sokulmuş şekli ile değiştiriyorum
   * daha sonra bu işleme soktugum 2 sayıyı arrayden cıkartıyorum ve array in başına şuanki degerimi ekliyorum
   * bu işlemi taki arrayın uzunlugu 1 olana kadar yaptım
   * en sonunda da arrayın 1. elemanını donduruyorum
   * @param {Array} arr arrrayı geçiyoruz
   * @param {Function} func işlenecek fonksiyon
   * @param {Number} baslangic baslangıç değeri
   */
  reduceCakmasi(arr, func, baslangic) {
    let reducedArr = arr;
    let suanki = baslangic;
    reducedArr.unshift(suanki);
    while (reducedArr.length != 1) {
      suanki = func.call(suanki, reducedArr[0], reducedArr[1]);
      reducedArr.splice(0, 2);
      reducedArr.unshift(suanki);
    }
    return reducedArr[0];
  }

  /**
   * each de map vari arrayın her elemanını gezdiğimiz bir yapıda fakat array döndürmüyor
   * sadece o anki array değerini gönderip yapılacak şeyi kullanıcıya bıraktım
   * @param {Array} arr her bir elemanı gezilecek array
   * @param {Function} func yapılacak işlem için gerekli callback functionu
   */
  eachCakmasi(arr, func) {
    for (let i = 0, len = arr.length; i < len; i++) {
      func.call(i, arr[i]);
    }
  }

  /**
   * some filter ile aynı şeyi yapıyor fakat array dondurmuyoruz sart saglandığı anda true donduruyoruz gerisine bakmaya gerek yok
   * sağlanmaz ise false
   * @param {Array} arr array alıyoruz
   * @param {Function} func fonksiyonu alıyoruz
   * @param {any} sart fonksiyon şartını alıyoruz
   */
  someCakmasi(arr, func, sart) {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (func.call(sart, arr[i])) return true;
    }
    return false;
  }

  /**
   * every some'ın tam tersi bu sefer hepsi şartı sağlar ise true döduruyoruz
   * bütün arrayı şarta bağlı gezdim ve bir değişkeni arttırdım bu şart true dondugunde
   * en sonda da bu sayı arrayın uzunluguna eşit işe hepsi koşulu sağlıyordur ve true dondurdum değil ise false
   * @param {Array} arr array alıyoruz
   * @param {Function} func fonksiyonu alıyoruz
   * @param {any} sart fonksiyon şartını alıyoruz
   */
  everyCakmasi(arr, func, sart) {
    let count = 0;
    for (let i = 0, len = arr.length; i < len; i++) {
      if (func.call(sart, arr[i])) count++;
    }
    if (count == arr.length) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Başitce bütün arrayı gezip içinde aranan değer var ise true yok ise false döndürüyoruz
   * @param {Array} arr array
   * @param {any} arananDeger any
   */
  includesCakmasi(arr, arananDeger) {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (arr[i] == arananDeger) return true;
    }
    return false;
  }

  /**
   * find bir fonksiyon tarafından belirlenen bir koşulu sağlayan ilk elemanın değerini döndürüyor
   * @param {Array} arr array
   * @param {Function} func function
   * @param {any} sart any
   */
  findCakmasi(arr, func, sart) {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (func.call(sart, arr[i])) return arr[i];
    }
    return undefined;
  }

  /**
   * for in loop 'u ile bütün objeyi gezdim ve keyleri bir arraye push edip o array'i döndürdüm
   * @param {Object} obj object
   */
  keysCakmasi(obj) {
    let arr = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        arr.push(key);
      }
    }
    return arr;
  }

  /**
   * keys ile aynı işlemi yaptım bu sefer key'i değil değeri döndürdüm
   * @param {Object} obj object
   */
  valuesCakmasi(obj) {
    let arr = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        arr.push(obj[key]);
      }
    }
    return arr;
  }

  /**
   * entries key-value pairs leri aynı arrayde tutulan 2d bir array döndürür
   * bu yuzden yukardaki keys ya da values gibi tek tek pushlamak yerine
   * ikisini birden bir array olarak push ettim
   * @param {Object} obj object
   */
  entriesCakmasi(obj) {
    let arr = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        arr.push([key, obj[key]]);
      }
    }
    return arr;
  }

  /**
   * https://dassur.ma/things/deep-copy/ internette şöyle bir şey gördüm bu hoşuma gitti o yüzden bunu kullandım
   * @param {*} obj object
   */
  cloneCakmasi(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
}

const _ = new Cakma();
const arr1 = [1, 2, 5, 6];
console.log("Arrayimiz " + arr1);
console.log("Array each");
_.eachCakmasi(arr1, x => console.log(x));

console.log("Array some cakması, şart: x == 2");
console.log(_.someCakmasi(arr1, x => x == 2)); // true

console.log("Array every cakması, şart: x > 3");
console.log(_.everyCakmasi(arr1, x => x > 3)); // false

console.log("Array includes cakması, aranan: 'bulamıcak'");
console.log(_.includesCakmasi(arr1, "bulamıcak")); // false

console.log("Array find cakması, şart: x > 2");
console.log(_.findCakmasi(arr1, x => x > 2)); // 5

console.log("Array filter cakması, şart: x > 3");
console.log(_.filterCakmasi(arr1, x => x > 3)); // [5, 6]

console.log("Array map cakması, yapılacak: x * 2");
console.log(_.mapCakmasi(arr1, x => x * 2)); // [ 2, 4, 10, 12 ]

console.log("Array reduce cakması, işlem: toplama, başlangıç değeri:0");
console.log(_.reduceCakmasi(arr1, (a, b) => a + b, 0)); // 14

console.log("Array reduce cakması, işlem: çıkartma, başlangıç değeri:0");
console.log(_.reduceCakmasi(arr1, (a, b) => a - b, 0)); // -14

const obje = { 100: "a", 2: "b", 7: "c" };
console.log("objemiz " + JSON.stringify(obje));

console.log("Object keys cakması");
console.log(_.keysCakmasi(obje)); // [ '2', '7', '100' ]

console.log("Object values cakması");
console.log(_.valuesCakmasi(obje)); // [ 'b', 'c', 'a' ]

console.log("Object entries cakması");
console.log(_.entriesCakmasi(obje)[0]); // [ '2', 'b' ]

console.log("Object clone diye bir şey yok ama bu işi yapan method");
const clonedObj = _.cloneCakmasi(obje);
console.log(clonedObj); // { '2': 'b', '7': 'c', '100': 'a' }
