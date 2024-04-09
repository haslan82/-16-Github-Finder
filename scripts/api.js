export class Github {
  constructor() {
    this.client_id = "54b494f51e02c701e97d";
    this.client_secret = "1f3bd19fb2efae89db898d92089d8834ce9f058a";
    this.per_page = 10;
    this.sort = "asc";
  }

  // api'den kullanıcı bilgilerini alma
  async fetchUserData(username) {
    // parametre olarak gelen kullanıcı adına göre istek attık

    const profileRes = await fetch(
      `https://api.github.com/users/${username}?client_id=
        ${this.client_id}&client_secrets=${this.client_secret}`
    );

    // kullanıcı repolarını almak için istek attık
    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?cliend_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.per_page}&sort=${this.sort}  `
    );

    //apiden aldıgımız cevabı json yapısına cevirdik
    const data = await profileRes.json();
    const repos = await repoRes.json();

    // fonksiyonun çağrıldıgı yere bilgileri gönderme
    return { data, repos };
  }
}
