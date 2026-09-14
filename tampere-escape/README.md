# Tampere 1918 – Esikunnan Pääte (Pakohuonepeli)

Historiallinen hybridi-pakohuonepeli, joka sijoittuu huhtikuun 1918 Tampereen taistelun dramaattisimpiin hetkiin. Peli yhdistää React-pohjaisen digitaalisen kenttäpäätteen fyysisiin tulostettaviin asiakirjoihin ja oikeaan numerolukolliseen lippaaseen.

---

## 🧭 Pelin idea & Rakenne

Pelaajat toimivat historian tutkijoina, jotka ovat löytäneet Raatihuoneen kellarista suljetun kenttäkassan ja vanhan esikunnan kenttäpäätteen. Tehtävänä on purkaa 72 tunnin suojausketju seuraamalla kansliakirjuri **Aino Koskisen** ja kenttäkuriiri **Eino Niemisen** jättämiä viestejä.

Peli etenee 4 vaiheessa:

1. **Osa 1: Raatihuoneen kanslia** – Henkilökortiston tutkiminen ja avainhenkilöiden leimojen tunnistus (Dokumentti 1).
2. **Osa 2: Rautatieaseman lennätin** – Reaaliaikaisen morsekoodin kuuntelu ja sähkösäännön purku (Dokumentti 2).
3. **Osa 3: Finlaysonin varapääte** – Neljän puolustuslinjan tilan varmentaminen kartalta ja arkistoista (Dokumentti 3).
4. **Osa 4: Kaksoisvaltuutus yli rintamalinjan** – Asymmetrinen kahden pelaajan viestintätehtävä eri rooleissa (Aino & Eino).
5. **Huipennus** – Pääte antaa mekaanisen lukkokoodin pöydällä olevaan metallilippaaseen, jonka sisältä löytyy salainen kirje (Dokumentti 4).

---

## 🖨️ Pelin järjestäjälle (Rekvisiitta & Valmistelut)

Pelin pelaamiseen tarvitaan:

- **Tulosteet:** Tulosta kansiosta [`printables/`](./printables) löytyvät Dokumentit 1–3 pöydälle.
- **Lipas & Lukko:** Metallilipas tai laatikko, joka on lukittu 4-numeroisella riippulukolla (asetuskoodi: `2703`).
- **Salainen dokumentti:** Tulosta `Dokumentti 4` ja sulje se lukitun lippaan sisälle.
- **Laitteet:** 1–2 älypuhelinta tai tietokonetta verkkosovelluksen käyttöön (vaiheessa 4 suositellaan kahta laitetta).

---

## 🛠️ Tekninen toteutus

- **Framework:** React + Vite
- **Audio:** Web Audio API (reaaliaikainen syntetisoitu morsekoodi)
- **Käyttöliittymä:** Responsiivinen mobiilioptimoitu näkymä, aikakaudelle uskollinen typografia ja väriteema
- **Julkaisu:** Vercel

### Asennus ja kehitys lokaalisti

```bash
# Asenna riippuvuudet
npm install

# Käynnistä kehityspalvelin
npm run dev

# Rakenna tuotantoversio
npm run build
```
