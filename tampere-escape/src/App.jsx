import React, { useState, useEffect, useRef } from "react";

// Oikeat koodit vaiheittain
const CODES = {
  STAGE_1: "3719",
  STAGE_2: "4239",
  STAGE_3: "6248",
  STAGE_4: "7431", // Dialogista syntyvä kaksoisvarmenne
  PHYSICAL_VAULT: "2703", // Riippulukon lopullinen koodi
};

export default function TampereEscapeGame() {
  const [stage, setStage] = useState(1);
  const [pinInput, setPinInput] = useState("");
  const [error, setError] = useState(false);

  const handlePinSubmit = (targetCode, nextStage) => {
    if (pinInput.trim() === targetCode) {
      setStage(nextStage);
      setPinInput("");
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.headerTitle}>ESIKUNNAN PÄÄTE – HUHTIKUU 1918</h2>
        <div style={styles.badge}>
          {stage <= 4 ? `OSA: ${stage} / 4` : "TEHTÄVÄ SUORITETTU"}
        </div>
      </header>

      <main style={styles.content}>
        {stage === 1 && <Stage1 />}
        {stage === 2 && <Stage2 />}
        {stage === 3 && <Stage3 />}
        {stage === 4 && <Stage4 />}
        {stage === 5 && <StageFinal vaultCode={CODES.PHYSICAL_VAULT} />}
      </main>

      {/* Vaiheissa 1-4 näytetään PIN-syöttökenttä */}
      {stage <= 4 && (
        <footer style={styles.footer}>
          <div style={styles.pinContainer}>
            <input
              type="text"
              maxLength={4}
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value)}
              placeholder="SYÖTÄ 4-NUMEROINEN VARMENNE"
              style={{
                ...styles.input,
                borderColor: error ? "#b03a2e" : "#5a4632",
              }}
            />
            <button
              onClick={() => {
                if (stage === 1) handlePinSubmit(CODES.STAGE_1, 2);
                if (stage === 2) handlePinSubmit(CODES.STAGE_2, 3);
                if (stage === 3) handlePinSubmit(CODES.STAGE_3, 4);
                if (stage === 4) handlePinSubmit(CODES.STAGE_4, 5); // Avaa loppuruudun!
              }}
              style={styles.button}
            >
              VAHVISTA
            </button>
          </div>
          {error && (
            <p style={styles.errorText}>
              VIRHEELLINEN VARMENNE – YHTEYS EVÄTTY
            </p>
          )}
        </footer>
      )}
    </div>
  );
}

function Stage1() {
  const persons = [
    {
      name: "M. Saarinen",
      role: "Raatihuone",
      age: 22,
      origin: "Kangasalan osasto",
      note: "Entinen kaupunginviskaalin kanslisti. Vastaa punaisen esikunnan päiväkäskyjen puhtaaksikirjoituksesta ja arkiston polttovalmisteluista.",
      stamp: "0",
    },
    {
      name: "I. Blomqvist",
      role: "Raatihuone",
      age: 34,
      origin: "Tampereen ruotsinkielinen työväenyhdistys",
      note: "Typografi ja miliisikanslian kirjuri. Vastaa läntisestä kirjeenvaihdosta, tulkkauksesta sekä ruotsinkielisten punakaartilaisten yhteyksistä.",
      stamp: "1", // OIKEA 3
    },
    {
      name: "A. Salmela",
      role: "Teknillinen Opisto",
      age: 29,
      origin: "Tampereen punakaartin esikuntakomppania",
      note: "Maanmittausylioppilas. Toimii esikunnan kartturina; laatii puolustuslohkojen tilannekarttoja ja koordinoi juoksulähettien reittejä.",
      stamp: "2",
    },
    {
      name: "K. Virtanen",
      role: "Teknillinen Opisto",
      age: 41,
      origin: "Tampereen Telefoniyhdistyksen työntekijä",
      note: "Keskusasentaja. Vastaa kellarin maakaapelikeskuksesta ja linjojen häiriöpäivystyksestä ilmalinjojen katkettua tykistötulessa.",
      stamp: "3", // OIKEA 1
    },
    {
      name: "V. Lehtonen",
      role: "Pyynikin harju",
      age: 38,
      origin: "Pispalan punakaarti",
      note: "Leipomotyöläinen. Johtaa harjun kenttäkeittiötä ja rintamalohkon muonitusta; vastuussa Pispalan ja Pyynikin asemien ruokahuollosta.",
      stamp: "4",
    },
    {
      name: "H. Lindroos",
      role: "Attilan varasto",
      age: 45,
      origin: "Tampereen Jalkinetyöntekijäin ammattiosasto",
      note: "Entinen leikkaajamestari. Valvoo kenkätehtaan raaka-ainevarastoja sekä saappaiden ja nahkatarvikkeiden jakelua taistelujoukoille.",
      stamp: "5",
    },
    {
      name: "J. Koski",
      role: "Lapinniemi",
      age: 19,
      origin: "Lapinniemen puuvillatehtaan komppania",
      note: "Kehruutehtaan työläinen. Asetettu Näsijärven ranta-alueen ja Lapinniemen vartio-osaston varamieheksi järvenjään tähystykseen.",
      stamp: "6",
    },
    {
      name: "E. Rantanen",
      role: "Attilan varasto",
      age: 31,
      origin: "Kauppa-apulaisten ammattiosasto",
      note: "Varastonhoitaja. Kirjaa Attilan tiloihin evakuoitujen viljamakasiinien ja jauhovarantojen päivittäistä kulutusta siviiliväestölle.",
      stamp: "7", // OIKEA 2
    },
    {
      name: "T. Nieminen",
      role: "Rautatieasema",
      age: 47,
      origin: "Valtionrautateiden konepaja",
      note: "Kokenut vaihdemies. Päivystää eteläisellä ratapihalla veturivarikon vaihteilla panssarijunan mahdollisia siirtoja varten.",
      stamp: "8",
    },
    {
      name: "O. Mäkinen",
      role: "Rautatieasema",
      age: 26,
      origin: "Pietarin radan rautatieläiskaarti",
      note: "Rahtimies. Saapui Pietarin viimeisen huoltojunan mukana 23.3.; vastaa aseman makasiineille puretun sotamateriaalin kirjaamisesta.",
      stamp: "9", // OIKEA 4
    },
  ];

  return (
    <div>
      <div style={storyStyles.reportBox}>
        <div style={storyStyles.reportHeader}>
          TILANNEKATSAUS // KESKIVIIKKO 3.4.1918 KLO 18.00 // RAATIHUONEEN
          KANSLIA
        </div>
        <div style={storyStyles.reportQuote}>
          ”Keskustorin ikkunat helisevät tykistökeskityksestä. Valkoisten
          tykistötuli Kalevankankaan suunnalta moukaroi kaupunkia, ja esikunta
          määräsi arkiston suljettavaksi. En voi jättää tovereiden
          henkilökortteja vihollisen käsiin – ne olisivat suora kuolemantuomio.
          Kansliapäällikkö lukitsi päätteen neljän luotetun toverin leimoilla.
          Minun on selvitettävä määräyksen vihjeet ennen kuin katuammunta
          tavoittaa torin.”
          <div style={storyStyles.speaker}>— Aino Koskinen, kansliakirjuri</div>
        </div>
      </div>

      <h3 style={styles.stageTitle}>Kanslian luottamusluettelo</h3>
      <p style={styles.desc}>
        Esikunnan hätäsäännön mukainen varmenne vaatii neljän vastuuhenkilön
        henkilökorttien leimanumerot. Etsi kansliapäällikön määräyksen N:o 44
        kuvaamat toverit alla olevasta luettelosta.
      </p>

      {/* Grid ja henkilökortit ennallaan */}
      <div style={styles.grid2Col}>
        {persons.map((p, idx) => (
          <div key={idx} style={styles.card}>
            <div style={styles.cardStamp}>{p.stamp}</div>
            <div
              style={{ display: "flex", alignItems: "baseline", gap: "8px" }}
            >
              <strong style={{ fontSize: "1.05rem" }}>{p.name}</strong>
              <span style={{ fontSize: "0.8rem", color: "#7a654c" }}>
                ({p.age} v)
              </span>
            </div>
            <div
              style={{
                color: "#6d533b",
                fontWeight: "bold",
                fontSize: "0.85rem",
                marginTop: "2px",
              }}
            >
              {p.role}
            </div>
            <div
              style={{
                color: "#8c6b4d",
                fontStyle: "italic",
                fontSize: "0.75rem",
                marginBottom: "6px",
              }}
            >
              Tausta: {p.origin}
            </div>
            <div
              style={{ fontSize: "0.85rem", lineHeight: 1.4, color: "#2b231c" }}
            >
              {p.note}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Stage2() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);

  const playMorse = () => {
    if (isPlaying) return;
    setIsPlaying(true);

    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    audioCtxRef.current = ctx;

    const dot = 0.1; // Hieman rauhallisempi, helpompi erottaa
    const freq = 650;

    const sequence = [
      // --- OSA 1: S-O-S ---
      // S (...)
      { tone: true, dur: dot },
      { tone: false, dur: dot },
      { tone: true, dur: dot },
      { tone: false, dur: dot },
      { tone: true, dur: dot },
      { tone: false, dur: dot * 3 },
      // O (---)
      { tone: true, dur: dot * 3 },
      { tone: false, dur: dot },
      { tone: true, dur: dot * 3 },
      { tone: false, dur: dot },
      { tone: true, dur: dot * 3 },
      { tone: false, dur: dot * 3 },
      // S (...)
      { tone: true, dur: dot },
      { tone: false, dur: dot },
      { tone: true, dur: dot },
      { tone: false, dur: dot },
      { tone: true, dur: dot },

      // PITKÄ TAUKO OSIOIDEN VÄLISSÄ
      { tone: false, dur: dot * 8 },

      // --- OSA 2: T-U-L-I ---
      // T (-)
      { tone: true, dur: dot * 3 },
      { tone: false, dur: dot * 3 },
      // U (..-)
      { tone: true, dur: dot },
      { tone: false, dur: dot },
      { tone: true, dur: dot },
      { tone: false, dur: dot },
      { tone: true, dur: dot * 3 },
      { tone: false, dur: dot * 3 },
      // L (.-..)
      { tone: true, dur: dot },
      { tone: false, dur: dot },
      { tone: true, dur: dot * 3 },
      { tone: false, dur: dot },
      { tone: true, dur: dot },
      { tone: false, dur: dot },
      { tone: true, dur: dot },
      { tone: false, dur: dot * 3 },
      // I (..)
      { tone: true, dur: dot },
      { tone: false, dur: dot },
      { tone: true, dur: dot },

      // PITKÄ TAUKO OSIOIDEN VÄLISSÄ
      { tone: false, dur: dot * 8 },

      // --- OSA 3: 0 4 0 0 ---
      // 0 (-----)
      { tone: true, dur: dot * 3 },
      { tone: false, dur: dot },
      { tone: true, dur: dot * 3 },
      { tone: false, dur: dot },
      { tone: true, dur: dot * 3 },
      { tone: false, dur: dot },
      { tone: true, dur: dot * 3 },
      { tone: false, dur: dot },
      { tone: true, dur: dot * 3 },
      { tone: false, dur: dot * 3 },
      // 4 (....-)
      { tone: true, dur: dot },
      { tone: false, dur: dot },
      { tone: true, dur: dot },
      { tone: false, dur: dot },
      { tone: true, dur: dot },
      { tone: false, dur: dot },
      { tone: true, dur: dot },
      { tone: false, dur: dot },
      { tone: true, dur: dot * 3 },
      { tone: false, dur: dot * 3 },
      // 0 (-----)
      { tone: true, dur: dot * 3 },
      { tone: false, dur: dot },
      { tone: true, dur: dot * 3 },
      { tone: false, dur: dot },
      { tone: true, dur: dot * 3 },
      { tone: false, dur: dot },
      { tone: true, dur: dot * 3 },
      { tone: false, dur: dot },
      { tone: true, dur: dot * 3 },
      { tone: false, dur: dot * 3 },
      // 0 (-----)
      { tone: true, dur: dot * 3 },
      { tone: false, dur: dot },
      { tone: true, dur: dot * 3 },
      { tone: false, dur: dot },
      { tone: true, dur: dot * 3 },
      { tone: false, dur: dot },
      { tone: true, dur: dot * 3 },
      { tone: false, dur: dot },
      { tone: true, dur: dot * 3 },
      { tone: false, dur: dot * 8 },
    ];

    let currentTime = ctx.currentTime + 0.1;

    sequence.forEach(({ tone, dur }) => {
      if (tone) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.value = freq;
        osc.type = "sine";
        gain.gain.setValueAtTime(0.2, currentTime);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(currentTime);
        osc.stop(currentTime + dur);
      }
      currentTime += dur;
    });

    setTimeout(
      () => {
        setIsPlaying(false);
      },
      (currentTime - ctx.currentTime) * 1000,
    );
  };

  return (
    <div>
      <div style={storyStyles.reportBox}>
        <div style={storyStyles.reportHeader}>
          TILANNEKATSAUS // TORSTAI 4.4.1918 KLO 04.00 // RAUTATIEASEMAN
          SÄHKÖTINKAMMIO
        </div>
        <div style={storyStyles.reportQuote}>
          ”Makasiinit ja veturivarikko ovat ilmiliekeissä. Valkoiset ovat
          murtautuneet Tammelan kautta ratapihan vaihteille. Viipurin runkolinja
          katkesi juuri. Olen teljennyt kellarin rautaoven ja viritän sähkötintä
          käsiparistolla linjalle 2 kohti Keskustoria. Aino, ota sanoma vastaan!
          Tämä on viimeinen yhteys idästä ennen kuin meidät vallataan.”
          <div style={storyStyles.speaker}>— Tauno Mäkinen, sähköttäjä</div>
        </div>
      </div>
      <h3 style={styles.stageTitle}>Keskusaseman radiosähke</h3>
      <p style={styles.desc}>
        Lennätinlinjalta 2 vastaanotettiin salattu hätälähetys ennen ratapihan
        menetystä. Kuuntele signaali ja käytä esikunnan fyysistä
        salakirjoitusavainta sanoman purkamiseen.
      </p>

      <div style={{ textAlign: "center", margin: "32px 0" }}>
        <button
          onClick={playMorse}
          disabled={isPlaying}
          style={styles.morseBtn}
        >
          {isPlaying
            ? "••• SIGNAALIA VASTAANOTETAAN •••"
            : "▶ AVAA HÄTÄTAAJUUS (650 kHz)"}
        </button>
      </div>

      {/* Autenttinen signaalitilatieto puhelinlunttilapun sijaan */}
      <div
        style={{
          padding: "12px",
          backgroundColor: "#e4d8be",
          border: "1px dashed #7a654c",
          borderRadius: "4px",
          fontSize: "0.85rem",
          fontFamily: "monospace",
          color: "#4a3b2c",
          lineHeight: 1.6,
        }}
      >
        <div>LINJATILA: EPÄVAKAA (Viipurin runkolinja poikki)</div>
        <div>MODULAATIO: Sähkötinavain / Käsivälitys</div>
        <div>
          PROTOKOLLA: Esikunnan salakirjoitusohje N:o 2 (ks. arkistokuori)
        </div>
      </div>
      <div style={{ marginTop: "16px", fontSize: "0.8rem", color: "#5a4632" }}>
        <img
          src="https://internationalcwcouncil.org/wp-content/uploads/2021/10/WW2360x290-300x242.jpg"
          alt="Kuvitus"
        />
      </div>
    </div>
  );
}

function Stage3() {
  const [activePhoto, setActivePhoto] = useState(null);

  const locations = [
    {
      id: "pyynikki",
      code: "A",
      name: "Pyynikin harjun tähystys",
      x: 27,
      y: 60,
      report:
        "Harjun laelta kaupunki näytti savuavalta kraatterilta. Raskas kranaattituli oli parturoinut rinteet paljaaksi kallioksi, mutta kaksi keloutunutta suojamäntyä seisoi yhä pystyssä tähystysbunkkerin suulla kuin mykät vartijat.",

      img: "/pyynikki.jpg",
    },
    {
      id: "pispala",
      code: "B",
      name: "Pispalan haulitorni",
      x: 14,
      y: 43,
      report:
        "Pispalan harjulla metallitorni kohosi pimeyteen. Ylimmälle tähystystasanteelle ripustettiin kolme punaista myrskylyhtyä merkiksi siitä, että läntinen vetäytymistie oli yhä avoin.",

      img: "/pispalan_haulitorni.jpg",
    },
    {
      id: "tammela",
      code: "C",
      name: "Tammelan puukorttelit",
      x: 83,
      y: 36,
      report:
        "Puutalojen palaessa katuammunta ei tauonnut hetkeksikään. Kahdeksan piinaavan tunnin ajan etulinjan kiväärimiehet pitivät asemansa Kyttälänkadun kulmalla, kunnes pimeys laskeutui ja viimeisetkin panokset loppuivat.",

      img: "/tamme18.jpg",
    },
    {
      id: "finlayson",
      code: "D",
      name: "Finlaysonin kehräämö",
      x: 52,
      y: 50,
      report:
        "Kosken jylinä peitti juoksuaskeleet, kun partio ylitti sulkuportit pimeässä. Kehräämön sokkeloisesta kellarista löytyi neljä sinetöityä rautarasiaa, jotka oli kätketty valimon lattialankkujen alle turvaan ennen punaisten esikunnan hajoamista.",

      img: "/finlayson7.jpg",
    },
    {
      id: "raatihuone",
      code: "E",
      name: "Raatihuone & Keskustori",
      x: 52,
      y: 58,
      report:
        "Kanslian raskaat tammiovet oli teljetty seitsemällä takorautaisella salvalla, kun katuammunta tavoitti Keskustorin kivetyksen ja päämajan ikkunat särkyivät.",

      img: "/kapina_raatihuone.jpg",
    },
    {
      id: "asema",
      code: "F",
      name: "Rautatieaseman makasiinit",
      x: 74,
      y: 54,
      report:
        "Ratapihan yllä leijui palavan tervan ja rikin katku. Aamuyön usvasta veturin pilli antoi kuusi katkoilevaa vihellystä – se oli sovittu merkki siitä, että viimeinen yhteys idän suuntaan oli katkaistu lopullisesti ja asemakaarti oli jäänyt saarroksiin.",

      img: "/vanha-asema.jpg",
    },
    {
      id: "nasilinna",
      code: "G",
      name: "Näsilinnan puisto",
      x: 48,
      y: 47,
      report:
        "Puistovyöhykkeen suojissa torjuttiin viisi peräkkäistä rynnäkköä, ennen kuin graniittinen palatsi joutui saarroksiin ja valkoinen vaate nostettiin lipputankoon.",

      img: "/nasilinna.jpg",
    },
  ];

  return (
    <div>
      <div style={storyStyles.reportBox}>
        <div style={storyStyles.reportHeader}>
          TILANNEKATSAUS // PERJANTAI 5.4.1918 KLO 14.30 // FINLAYSONIN
          VARAPÄÄTE
        </div>
        <div style={storyStyles.reportQuote}>
          ”Pääsin kosken yli tehtaiden puupadoilta. Finlaysonin kehräämössä on
          esikunnan varapääte, mutta se on lukittu. Jotta järjestelmä luovuttaa
          kuriirivaltuutuksen eteenpäin harjulle, päätteeseen on vahvistettava
          kaupungin neljän puolustuslinjan tila. Minulla on muistiinpanot kunkin
          linjan asemapaikoista – nyt on tarkistettava kartan arkistoista, mitä
          niistä on kirjattu talteen.”
          <div style={storyStyles.speaker}>— Eino Nieminen, kenttäkuriiri</div>
        </div>
      </div>

      <h3 style={styles.stageTitle}>Varapääte: Neljä puolustuslinjaa</h3>
      <p style={styles.desc}>
        Seuraa Einon kenttämuistiota (Dokumentti 3). Paikanna linjojen
        asemapaikat kartan kirjaimista (A–G) ja avaa vastaavat arkistokortit
        havaintojen tekemiseksi.
      </p>

      <div style={mapStyles.mapContainer}>
        <img
          src="/Tampereen_taistelu_rajattu.jpg"
          alt="Tampere 1918 tilannekartta"
          style={mapStyles.mapImage}
        />

        {locations.map((loc) => (
          <button
            key={loc.id}
            type="button"
            onClick={() => setActivePhoto(loc)}
            style={{
              ...mapStyles.markerCircle,
              top: `${loc.y}%`,
              left: `${loc.x}%`,
            }}
            title={loc.name}
          >
            {loc.code}
          </button>
        ))}
      </div>

      <div style={mapStyles.legendGrid}>
        {locations.map((loc) => (
          <div
            key={loc.id}
            onClick={() => setActivePhoto(loc)}
            style={mapStyles.legendItem}
          >
            <span style={mapStyles.legendBadge}>{loc.code}</span>
            <span>{loc.name}</span>
          </div>
        ))}
      </div>

      {activePhoto && (
        <div style={styles.modalBackdrop} onClick={() => setActivePhoto(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div
              style={{
                fontSize: "0.75rem",
                fontFamily: "monospace",
                color: "#8c2d19",
                fontWeight: "bold",
                letterSpacing: "1px",
                marginBottom: "4px",
              }}
            >
              TIEDUSTELUARKISTO // KOHDE {activePhoto.code}
            </div>
            <h4
              style={{
                margin: "0 0 10px 0",
                fontFamily: "serif",
                fontSize: "1.2rem",
                color: "#2b231c",
              }}
            >
              {activePhoto.name}
            </h4>

            <img
              src={activePhoto.img}
              alt={activePhoto.name}
              style={styles.photoImg}
            />

            <div
              style={{
                marginTop: "12px",
                padding: "10px 12px",
                backgroundColor: "#e8dcbf",
                borderLeft: "3px solid #5a4632",
                borderRadius: "0 4px 4px 0",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  color: "#5a4632",
                  marginBottom: "4px",
                }}
              >
                KENTTÄPÄIVÄKIRJA:
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.88rem",
                  fontStyle: "italic",
                  lineHeight: 1.4,
                  color: "#2b231c",
                }}
              >
                ”{activePhoto.report}”
              </p>
            </div>

            <button
              onClick={() => setActivePhoto(null)}
              style={styles.closeBtn}
            >
              Sulje arkistokortti
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStyles = {
  mapContainer: {
    position: "relative",
    width: "100%",
    maxWidth: "520px", // Pitää näkymän ryhdikkäänä myös isolla näytöllä
    margin: "16px auto 0 auto",
    border: "2px solid #5a4632",
    borderRadius: "6px",
    overflow: "hidden",
    lineHeight: 0, // Estää selaimen luoman tyhjän raon kuvan alle
    boxShadow: "0 3px 8px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#dcd1ba",
  },
  mapImage: {
    width: "100%",
    height: "auto", // Lukitsee kuvasuhteen: kuva ja säiliö ovat aina 1:1 identtiset
    display: "block",
    userSelect: "none",
    pointerEvents: "none",
  },
  markerCircle: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    width: "28px",
    height: "28px",
    backgroundColor: "#8c2d19",
    color: "#ffffff",
    border: "2px solid #ffffff",
    borderRadius: "50%",
    fontWeight: "bold",
    fontSize: "0.85rem",
    fontFamily: "monospace",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
    zIndex: 2,
    padding: 0,
  },
  legendGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "8px",
    marginTop: "12px",
    backgroundColor: "#e8dcbf",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #c9baa1",
  },
  legendItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "0.85rem",
    color: "#2b231c",
    cursor: "pointer",
    padding: "4px",
  },
  legendBadge: {
    width: "20px",
    height: "20px",
    backgroundColor: "#8c2d19",
    color: "#fff",
    borderRadius: "50%",
    fontSize: "0.75rem",
    fontWeight: "bold",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
};

// -------------------------------------------------------------
// VAIHE 4: Operaatio Kuriiri (Kaksoisvaltuutus)
// -------------------------------------------------------------
function Stage4() {
  const [role, setRole] = useState(null); // 'hq' tai 'courier'

  if (!role) {
    return (
      <div style={{ textAlign: "center", padding: "10px 0" }}>
        <div
          style={{
            backgroundColor: "#e8dcbf",
            borderLeft: "4px solid #8c2d19",
            padding: "10px 14px",
            marginBottom: "20px",
            textAlign: "left",
            borderRadius: "0 4px 4px 0",
          }}
        >
          <div
            style={{
              fontSize: "0.75rem",
              fontFamily: "monospace",
              fontWeight: "bold",
              letterSpacing: "1px",
              color: "#8c2d19",
              marginBottom: "4px",
            }}
          >
            TILANNEKATSAUS // LAUANTAI 6.4.1918 KLO 05.45 // HÄMEENPUISTO MURTUU
          </div>
          <div
            style={{
              fontSize: "0.88rem",
              fontStyle: "italic",
              lineHeight: 1.4,
              color: "#3d2e20",
            }}
          >
            Valkoisten rynnäkköketjut ovat edenneet Aleksanterin kirkon puiston
            läpi. Raatihuoneen päämaja on eristetty läntisestä kaupunginosasta.
            Puhelinjohdot ovat poikki, ja viimeinen yhteys toimii vain harjulta
            annetun radiotiedustelun ja jaettujen muistiinpanojen varassa.
          </div>
        </div>

        <h3 style={styles.stageTitle}>KAKSOISVALTUUTUS: AINO JA EINO</h3>
        <p style={styles.desc}>
          Kassakaapin hätäavaus vaatii kahden erillisen henkilön samanaikaisen
          varmentamisen. Valitkaa roolinne laitteille:
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            maxWidth: "420px",
            margin: "20px auto 0 auto",
          }}
        >
          <button onClick={() => setRole("hq")} style={styles.roleBtn}>
            <div style={{ fontWeight: "bold", fontSize: "1rem" }}>
              AINO KOSKINEN (24 v)
            </div>
            <div style={{ fontSize: "0.8rem", opacity: 0.9, marginTop: "4px" }}>
              Päämaja / Raatihuoneen kanslia
            </div>
          </button>

          <button onClick={() => setRole("courier")} style={styles.roleBtn}>
            <div style={{ fontWeight: "bold", fontSize: "1rem" }}>
              EINO NIEMINEN (18 v)
            </div>
            <div style={{ fontSize: "0.8rem", opacity: 0.9, marginTop: "4px" }}>
              Kenttäkuriiri / Pyynikin harjun tähystys
            </div>
          </button>
        </div>

        <img
          src="https://webpages.tuni.fi/koskivoimaa/kaupunki/1900-18/kuvat/2881135d.jpg"
          alt="Kuvitus Tampere 1918"
          style={{ marginTop: "24px", maxWidth: "100%", borderRadius: "4px" }}
        />
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
          borderBottom: "1px solid #c9baa1",
          paddingBottom: "8px",
        }}
      >
        <div>
          <span
            style={{
              fontSize: "0.75rem",
              fontFamily: "monospace",
              color: "#8c2d19",
              fontWeight: "bold",
            }}
          >
            AKTIIVINEN ROOLI:
          </span>
          <h3
            style={{
              margin: "2px 0 0 0",
              fontFamily: "serif",
              fontSize: "1.25rem",
              color: "#2b231c",
            }}
          >
            {role === "hq"
              ? "Aino Koskinen – Raatihuone"
              : "Eino Nieminen – Pyynikin harju"}
          </h3>
        </div>
        <button onClick={() => setRole(null)} style={styles.smallBtn}>
          Vaihda roolia
        </button>
      </div>

      {role === "hq" ? (
        <div>
          <div
            style={{
              backgroundColor: "#fffdf9",
              border: "1px solid #c9baa1",
              padding: "10px 14px",
              borderRadius: "4px",
              marginBottom: "16px",
              fontSize: "0.88rem",
              lineHeight: 1.4,
              color: "#3d2e20",
            }}
          >
            <em>
              ”Eino, kuuletko? Keskustorin ikkunat hajosivat juuri
              kranaatinsirpaleista. Minulla on edessäni päämajan rekisteri.
              Kerro minulle mitä näet harjulta, niin etsin vastaavat kohteet
              arkistosta ja kirjaan numerot talteen!”
            </em>
          </div>
          <p style={{ ...styles.desc, fontSize: "0.95rem" }}>
            Kuuntele Einon ääneen lukemat näköhavainnot. Etsi kuvatut kohteet
            alla olevasta rekisteristä ja kirjaa niiden leimanumerot paperille{" "}
            <strong>Einon sanelujärjestyksessä (1–4)</strong>:
          </p>
          <div style={styles.grid2Col}>
            <div style={styles.card}>
              <div style={styles.cardStamp}>0</div>
              <strong>Klingendahlin kehruutehdas</strong>
              <br />
              <small>Eteläinen koskenvarsi, villakehräämö</small>
            </div>

            {/* 4. HAVAINTO */}
            <div style={styles.card}>
              <div style={styles.cardStamp}>1</div>
              <strong>Hatanpään kartano</strong>
              <br />
              <small>Eteläinen rantapuisto ja sotasairaala</small>
            </div>

            <div style={styles.card}>
              <div style={styles.cardStamp}>2</div>
              <strong>Kauppahalli</strong>
              <br />
              <small>Hämeenkadun suojahuoneet ja kellarit</small>
            </div>

            {/* 3. HAVAINTO */}
            <div style={styles.card}>
              <div style={styles.cardStamp}>3</div>
              <strong>Tampereen Tuomiokirkko</strong>
              <br />
              <small>Harmaakivipyhättö, holvit ja freskot</small>
            </div>

            {/* 2. HAVAINTO */}
            <div style={styles.card}>
              <div style={styles.cardStamp}>4</div>
              <strong>Pispalan haulitorni</strong>
              <br />
              <small>Punainen metallitorni harjun laella</small>
            </div>

            <div style={styles.card}>
              <div style={styles.cardStamp}>5</div>
              <strong>Aleksanterin kirkko</strong>
              <br />
              <small>Hämeenpuiston tiilikirkko puistovyöhykkeellä</small>
            </div>

            <div style={styles.card}>
              <div style={styles.cardStamp}>6</div>
              <strong>Pyynikin näkötorni</strong>
              <br />
              <small>Puinen näkötorni korkeimmalla kalliolla</small>
            </div>

            {/* 1. HAVAINTO */}
            <div style={styles.card}>
              <div style={styles.cardStamp}>7</div>
              <strong>Finlaysonin kehräämö</strong>
              <br />
              <small>Kosken länsiranta, punatiilimuurit</small>
            </div>

            <div style={styles.card}>
              <div style={styles.cardStamp}>8</div>
              <strong>Tampellan konepaja</strong>
              <br />
              <small>Kosken itärannan teollisuussali</small>
            </div>

            <div style={styles.card}>
              <div style={styles.cardStamp}>9</div>
              <strong>Tampereen Teatteri</strong>
              <br />
              <small>Keskustorin eteläpää, tiilirakennus</small>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              backgroundColor: "#fffdf9",
              border: "1px solid #c9baa1",
              padding: "10px 14px",
              borderRadius: "4px",
              marginBottom: "16px",
              fontSize: "0.88rem",
              lineHeight: 1.4,
              color: "#3d2e20",
            }}
          >
            <em>
              ”Aino! Olen päässyt harjun laelle männyn juureen. Savu peittää
              Näsijärven, mutta näen kaupungin maamerkit kiikareilla. Lue nämä
              havaintoni tarkasti ja etsi niitä vastaavat numerot Raatihuoneen
              kirjoista!”
            </em>
          </div>

          <p style={{ ...styles.desc, fontSize: "0.95rem" }}>
            Lue nämä 4 havaintoa{" "}
            <strong>ääneen Ainolle numerojärjestyksessä (1–4)</strong>. Älä
            näytä näyttöäsi Ainolle – hänen on tunnistettava paikat
            kuvauksistasi:
          </p>

          <div style={styles.card}>
            <p style={{ margin: 0, lineHeight: 1.4 }}>
              <strong>1.</strong> ”Koneet ovat vaienneet. Kosken suurin
              puuvillatehdas kätkee satoja naisia ja lapsia suuriin
              punatiilisiin kehräämöhalleihinsa.”
            </p>
          </div>

          <div style={styles.card}>
            <p style={{ margin: 0, lineHeight: 1.4 }}>
              <strong>2.</strong> ”Katson taakseni Pispalan suuntaan. Punaisten
              lippu liehuu vielä tuon punaisen metallitornin huipulla, josta
              ennen pudotettiin sulaa lyijyä haulien tekoon.”
            </p>
          </div>

          <div style={styles.card}>
            <p style={{ margin: 0, lineHeight: 1.4 }}>
              <strong>3.</strong> ”Itäpuolella, kaukana savupilvien takana
              seisoo suuri harmaakivipyhättö. Sen jykevät holvit suojaavat
              Simbergin freskoja ja kymmeniä haavoittuneita tovereita.”
            </p>
          </div>

          <div style={styles.card}>
            <p style={{ margin: 0, lineHeight: 1.4 }}>
              <strong>4.</strong> ”Kaupungin eteläpuolella, rannan
              puistoalueella seisoo vanha vaalea kartano. Sinne on punaisen
              ristin lipun alle perustettu suuri hätäsairaala.”
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function StageFinal({ vaultCode }) {
  return (
    <div style={{ textAlign: "center", padding: "10px 0" }}>
      <div
        style={{
          display: "inline-block",
          padding: "8px 16px",
          backgroundColor: "#2e7d32",
          color: "#fff",
          fontWeight: "bold",
          borderRadius: "4px",
          letterSpacing: "2px",
          marginBottom: "16px",
        }}
      >
        ✓ KAKSOISVALTUUTUS HYVÄKSYTTY
      </div>

      <div
        style={{
          ...storyStyles.reportBox,
          textAlign: "left",
          marginBottom: "20px",
        }}
      >
        <div style={storyStyles.reportHeader}>
          TUTKINTARAPORTTI // ARKISTOMYSTEERI RATKAISTU
        </div>
        <div style={storyStyles.reportQuote}>
          ”Yli vuosisadan vanha esikunnan varmennusketju on purettu. Seurasitte
          Ainon ja Einon ratkaisuja huhtikuun 1918 tulimyrskyssä aina viimeiseen
          aamuun saakka, jolloin kaupunki antautui. He sinetöivät tämän lippaan
          toivoen, että heidän todistuksensa löydetään vielä rauhan aikana.
          <br />
          <br />
          Tehtävä on suoritettu. Koodi on vahvistettu ja kenttälipas on
          avattavissa.”
          <div style={storyStyles.speaker}>— Historian tutkimusryhmä</div>
        </div>
      </div>

      <h3
        style={{
          fontFamily: "serif",
          fontSize: "1.4rem",
          margin: "0 0 10px 0",
          color: "#2b231c",
        }}
      >
        KENTTÄKASSAKAAPIN MEKAANINEN LUKKOKOODI:
      </h3>

      <div
        style={{
          fontSize: "3.2rem",
          fontFamily: "monospace",
          fontWeight: "bold",
          letterSpacing: "12px",
          color: "#8c2d19",
          padding: "16px 24px",
          backgroundColor: "#fdfbf7",
          border: "3px dashed #8c2d19",
          display: "inline-block",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        {vaultCode}
      </div>

      <p
        style={{
          fontWeight: "bold",
          color: "#2b231c",
          fontSize: "1.1rem",
          margin: "0 0 16px 0",
        }}
      >
        Kääntäkää koodi pöydällä olevaan metallilukkoon ja avatkaa lipas!
      </p>

      <img
        src="https://i.pinimg.com/736x/de/b3/d1/deb3d1d03f521a83d9a44717457b0260.jpg"
        alt="Lipas"
        style={{
          maxWidth: "100%",
          borderRadius: "4px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        }}
      />
    </div>
  );
}

// -------------------------------------------------------------
// Tyylit (Korkea kontrasti / 1918 -paperiteema)
// -------------------------------------------------------------
const styles = {
  container: {
    maxWidth: "720px",
    margin: "0 auto",
    minHeight: "100vh",
    backgroundColor: "#f3ebd7",
    color: "#2b231c",
    fontFamily: '"Georgia", serif',
    display: "flex",
    flexDirection: "column",
    borderLeft: "1px solid #dcd1ba",
    borderRight: "1px solid #dcd1ba",
    boxSizing: "border-box",
  },
  header: {
    padding: "16px 20px",
    borderBottom: "2px solid #5a4632",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e9ddc3",
    color: "#2b231c",
  },
  headerTitle: {
    margin: 0,
    fontSize: "1rem",
    letterSpacing: "1px",
    fontWeight: "bold",
    color: "#2b231c",
  },
  badge: {
    backgroundColor: "#3a2a1a",
    color: "#ffffff",
    padding: "4px 10px",
    fontSize: "0.8rem",
    borderRadius: "3px",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  content: {
    padding: "24px 20px",
    flex: 1,
    color: "#2b231c",
  },
  stageTitle: {
    fontFamily: "serif",
    marginTop: 0,
    fontSize: "1.4rem",
    borderBottom: "1px solid #c9baa1",
    paddingBottom: "8px",
    color: "#2b231c",
  },
  desc: {
    lineHeight: 1.5,
    color: "#3d2e20",
    fontSize: "1rem",
  },
  grid2Col: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "12px",
    marginTop: "16px",
  },
  card: {
    backgroundColor: "#fffdf9",
    border: "1px solid #c9baa1",
    padding: "14px 16px",
    borderRadius: "4px",
    position: "relative",
    marginBottom: "8px",
    color: "#2b231c",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  cardStamp: {
    position: "absolute",
    top: "10px",
    right: "12px",
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    border: "2px solid #8c2d19",
    color: "#8c2d19",
    backgroundColor: "rgba(140, 45, 25, 0.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "1.1rem",
    fontFamily: "monospace",
    transform: "rotate(-12deg)",
  },
  footer: {
    padding: "16px 20px",
    backgroundColor: "#e9ddc3",
    borderTop: "2px solid #5a4632",
  },
  pinContainer: {
    display: "flex",
    gap: "8px",
  },
  input: {
    flex: 1,
    padding: "12px",
    fontSize: "1.1rem",
    fontFamily: "monospace",
    letterSpacing: "3px",
    backgroundColor: "#ffffff",
    color: "#1a140e", // Varmistaa, että syötetyt numerot ovat syvän mustia
    border: "2px solid #5a4632",
    borderRadius: "4px",
    outline: "none",
  },
  button: {
    padding: "12px 20px",
    backgroundColor: "#3a2a1a",
    color: "#ffffff", // Vahva kontrasti tummanruskeaan nappiin
    border: "none",
    borderRadius: "4px",
    fontWeight: "bold",
    fontSize: "0.95rem",
    letterSpacing: "1px",
    cursor: "pointer",
  },
  errorText: {
    color: "#8c2d19",
    margin: "8px 0 0 0",
    fontSize: "0.85rem",
    fontWeight: "bold",
    letterSpacing: "0.5px",
  },
  morseBtn: {
    padding: "16px 24px",
    fontSize: "1.1rem",
    backgroundColor: "#8c2d19",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontFamily: "monospace",
    fontWeight: "bold",
    letterSpacing: "1px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  },
  phoneKeypadHint: {
    textAlign: "center",
    fontSize: "0.85rem",
    fontFamily: "monospace",
    color: "#2b231c",
    marginTop: "16px",
    padding: "10px",
    backgroundColor: "#dfd2b5",
    border: "1px solid #c4b595",
    borderRadius: "4px",
    fontWeight: "bold",
  },
  locationsGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "16px",
  },
  locButton: {
    padding: "14px 18px",
    textAlign: "left",
    backgroundColor: "#fffdf9",
    color: "#2b231c", // KORJAUS: estää valkoisen tekstin vaalealla pohjalla
    border: "1px solid #b8a68a",
    borderRadius: "4px",
    fontSize: "1.05rem",
    fontFamily: "serif",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
  },
  modalBackdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.75)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "#f3ebd7",
    padding: "20px",
    borderRadius: "6px",
    maxWidth: "480px",
    width: "100%",
    border: "2px solid #5a4632",
    color: "#2b231c",
  },
  photoImg: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "4px",
    filter: "grayscale(90%) contrast(120%)",
    border: "1px solid #5a4632",
  },
  closeBtn: {
    width: "100%",
    padding: "12px",
    marginTop: "14px",
    backgroundColor: "#3a2a1a",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    fontWeight: "bold",
    fontSize: "0.95rem",
    cursor: "pointer",
  },
  roleBtn: {
    padding: "16px 20px",
    backgroundColor: "#3a2a1a",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    fontWeight: "bold",
    fontSize: "0.95rem",
    letterSpacing: "1px",
    cursor: "pointer",
  },
  smallBtn: {
    padding: "6px 12px",
    fontSize: "0.85rem",
    backgroundColor: "#fffdf9",
    color: "#2b231c",
    border: "1px solid #5a4632",
    cursor: "pointer",
    borderRadius: "3px",
    fontWeight: "bold",
  },
  finalCallout: {
    marginTop: "24px",
    padding: "16px",
    backgroundColor: "#e8dcbf",
    border: "2px dashed #8c2d19",
    textAlign: "center",
    borderRadius: "4px",
    fontWeight: "bold",
    color: "#5a2217",
  },
};
const storyStyles = {
  reportBox: {
    backgroundColor: "#e8dcbf",
    borderLeft: "4px solid #8c2d19",
    padding: "12px 16px",
    marginBottom: "20px",
    borderRadius: "0 4px 4px 0",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  reportHeader: {
    fontSize: "0.75rem",
    fontFamily: "monospace",
    fontWeight: "bold",
    letterSpacing: "1px",
    color: "#8c2d19",
    marginBottom: "6px",
  },
  reportQuote: {
    fontSize: "0.92rem",
    fontStyle: "italic",
    lineHeight: 1.45,
    color: "#3d2e20",
  },
  speaker: {
    marginTop: "6px",
    fontSize: "0.8rem",
    fontWeight: "bold",
    fontStyle: "normal",
    color: "#5a4632",
    textAlign: "right",
  },
};
