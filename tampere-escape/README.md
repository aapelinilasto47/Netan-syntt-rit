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

- **Asiakirjat:** Tulosta tiedosto [`printables/Tampere_1918_Pakohuone_Dokumentit.pdf`](./printables/Punakaartin kenttälippaan mysteeri, dokumentit.pdf) seuraavasti:
  - **Arkki 1 (Dokumentti 1):** Tulosta sivut 1–2 **kaksipuolisena** pelipöydälle.
  - **Arkki 2 (Dokumentti 2):** Tulosta sivut 3–4 **kaksipuolisena** pelipöydälle.
  - **Arkki 3 (Dokumentti 3):** Tulosta sivut 5–6 **kaksipuolisena** pelipöydälle.
  - **Arkki 4 (Dokumentti 4):** Tulosta sivu 7 **yksipuolisena ja sulje se etukäteen lukitun lippaan sisälle!**
- **Lipas & Lukko:** Metallilipas tai laatikko, joka on lukittu 4-numeroisella riippulukolla.
- **Laitteet:** 1–2 älypuhelinta tai tietokonetta verkkosovelluksen käyttöön (vaiheessa 4 suositellaan kahta eri laitetta pelaajille).

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

## ⚠️ Spoilerit (Ratkaisukoodit järjestäjälle)

- **Vaihe 1 (Kanslia):** 3719

- **Vaihe 2 (Morse):** 4239

- **Vaihe 3 (Puolustuslinjat):** 6248

- **Vaihe 4 (Kaksoisvaltuutus):** 7431

- **Mekaaninen riippulukko (Lipas):** 2703
