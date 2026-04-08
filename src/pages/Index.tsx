import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import QuoteBanner from "@/components/QuoteBanner";
import Footer from "@/components/Footer";
import quoteBg from "@/assets/quote-bg.jpg";
import candlesBg from "@/assets/candles-bg.jpg";

const nyFAQ = [
  { question: "Vem är Gud?", answer: "I den ortodoxa tron är Gud den Heliga Treenigheten — Fadern, Sonen och den Helige Ande. Gud är evig, allsmäktig och oändligt kärleksfull. Han är alla tings skapare och upprätthållare, och Han önskar en personlig relation med varje människa." },
  { question: "Vem är Jesus?", answer: "Jesus Kristus är Guds Son, den andra personen i den Heliga Treenigheten. Han blev människa, levde bland oss, korsfästes, dog och uppstod från de döda för att besegra döden och ge oss evigt liv. Han är vägen, sanningen och livet." },
  { question: "Vad är kyrkan?", answer: "Kyrkan är Kristi kropp på jorden — gemenskapen av alla troende genom alla tider. Den ortodoxa kyrkan ser sig som den oavbrutna fortsättningen av den kyrka som apostlarna grundade för 2000 år sedan." },
  { question: "Vad gör man när man ber?", answer: "Bön är ett samtal med Gud. I den ortodoxa traditionen ber man med hela kroppen — stående, med korsande av sig själv, ibland med bugningar. Man ber genom fasta böner, psalmer, och personlig bön. Jesusbönen — 'Herre Jesus Kristus, Guds Son, förbarma dig över mig' — är central." },
  { question: "Vad skiljer ortodoxin från de andra kyrkorna?", answer: "Den ortodoxa kyrkan bevarar den oförändrade tron från de första kristna. Vi har en oavbruten tradition av sakrament, ikoner, liturgi och teologi som går tillbaka till apostlarna och de sju ekumeniska koncilierna." },
  { question: "Vad tycker ortodoxin om andra religioner?", answer: "Ortodoxin respekterar alla människor men bekänner att fullheten av sanningen finns i Kristus och hans kyrka. Vi för dialog med respekt och kärlek, men kompromissar inte med trons grundläggande sanningar." },
  { question: "Har djur samma värde som människor?", answer: "Djur är en del av Guds skapelse och förtjänar omsorg och respekt. Dock har människan en unik ställning som skapad till Guds avbild, med en evig själ och ett moraliskt ansvar." },
  { question: "Hur ser kyrkan på rikedom och fattigdom?", answer: "Rikedom i sig är inte synd, men kärleken till pengar och materiellt är farlig. Kyrkan uppmanar till generositet, allmosor och att dela med sig. De heliga fäderna betonar att det vi äger utöver våra behov tillhör de fattiga." },
  { question: "Vad händer efter döden?", answer: "Ortodoxin lär att själen efter döden möter Gud i en personlig dom. De rättfärdiga vilar i Guds närvaro i väntan på den allmänna uppståndelsen, då alla ska uppstå och dömas. Målet är evigt liv i Guds rike." },
  { question: "Vad är viktigt för en ortodox kristen?", answer: "Bön, fasta, deltagande i sakramenten (särskilt nattvarden och bikten), kärlek till nästan, och en ständig strävan efter att växa närmare Gud — det som kallas theosis." },
  { question: "Hur blir man ortodox kristen?", answer: "Man blir ortodox kristen genom dopet (eller genom att bli mottagen i kyrkan om man redan är döpt). Processen börjar med att lära känna tron, ofta genom en katekumenperiod, och att bygga en relation med en ortodox församling och präst." },
  { question: "Är allt som står i Bibeln bokstavligt sant?", answer: "Ortodoxin läser Bibeln genom kyrkans tradition och de heliga fädernas tolkning. Vissa texter är historiska, andra poetiska eller symboliska. Bibeln är Guds ord, men den måste förstås inom kyrkans sammanhang — inte som en isolerad text." },
  { question: "Om Gud finns, varför finns det så mycket ont?", answer: "Ondska är inte något Gud skapade, utan en konsekvens av den fria viljan — människans val att vända sig bort från Gud. Gud respekterar vår frihet men lämnar oss aldrig ensamma. Genom Kristi lidande och uppståndelse har han besegrat det onda." },
  { question: "Vad är meningen med livet?", answer: "Meningen med livet är att känna Gud, att växa i kärlek och helighet, och att uppnå gemenskap med Honom — theosis. Människan är skapad för att dela Guds eviga liv och kärlek." },
  { question: "Vad är frälsning?", answer: "Frälsning är inte bara att bli 'räddad' från synd, utan en pågående process av helande och förvandling. Genom Guds nåd och vårt samarbete (synergi) blir vi mer och mer lika Kristus — detta är frälsningens väg." },
  { question: "Vad är poängen med kristendomen?", answer: "Kristendomen är inte bara en moralisk lära eller filosofi — den är en levande relation med den uppståndne Kristus. Poängen är att människan ska bli hel, helad, och förenad med Gud. Det är vägen till verklig frihet och evig kärlek." },
];

const lardFAQ = [
  { question: "Varför går ortodoxa kristna till bikt?", answer: "Bikten är ett sakrament för helande och försoning. Genom att bekänna sina synder inför Gud, med prästen som vittne, får den troende Guds förlåtelse och kraft att gå vidare. Det är en medicinsk bild — kyrkan är ett sjukhus för själen." },
  { question: "Vad är helgon?", answer: "Helgon är människor som levde i sådan nära gemenskap med Gud att de förvandlades av hans nåd. De är inte 'perfekta' utan förebilder och förebedjare. Kyrkan vördar dem och ber om deras förböner — de lever ju hos Gud." },
  { question: "Vad gör munkar och nunnor?", answer: "Munkar och nunnor lever ett liv helt vigt åt Gud genom bön, fasta, arbete och tystnad. Deras kall är att söka Gud med hela sitt hjärta och att be för hela världen. Klostren är kyrkans andliga motorer." },
  { question: "Varför har vi kyrkan och traditionerna?", answer: "Traditionen är inte tomma ritualer — den är den levande trons överföring genom generationerna. Kyrkan bevarar apostlarnas tro, sakramenten, bönerna och den andliga erfarenheten av Gud genom 2000 år." },
  { question: "Varför inte bara Jesus och Bibeln?", answer: "Bibeln föddes ur kyrkan, inte tvärtom. Det var kyrkan som samlade, bevarade och tolkade Skrifterna. Att läsa Bibeln utan kyrkans tradition är som att läsa en karta utan att känna till landskapet." },
  { question: "Skillnad mot katoliker?", answer: "De största skillnaderna är påvens roll (ortodoxin har ingen enskild ledare med universell auktoritet), filioque-frågan (om Helige Ande utgår från Fadern eller från Fadern och Sonen), och synen på nåd och frälsning. Ortodoxin betonar theosis snarare än juridisk rättfärdiggörelse." },
  { question: "Skillnad mot orientala/kopter?", answer: "Orientaliska ortodoxa (kopter, armenier, etiopier m.fl.) skildes från den bysantinska ortodoxin efter konciliet i Kalcedon år 451, främst på grund av kristologiska formuleringar. I modern dialog har man funnit att skillnaderna till stor del är språkliga snarare än teologiska." },
  { question: "Ber ortodoxa till Maria och helgon?", answer: "Vi ber inte till dem som till Gud — vi ber om deras förbön. Precis som du kan be en vän att be för dig, ber vi Gudsmodern och helgonen att be till Gud för oss. Maria har en särskild plats som Theotokos — Gudaföderskan." },
  { question: "Vad är Theosis?", answer: "Theosis (gudomliggörelse) är ortodoxins centrala mål: att människan ska bli delaktig av Guds natur (2 Petrus 1:4). Det handlar inte om att bli Gud i essens, utan att genom nåden bli allt mer lik Honom i kärlek, helighet och ljus." },
  { question: "Har ortodoxa en egen påve?", answer: "Nej, ortodoxin har ingen påve med universell makt. Ekumeniske patriarken av Konstantinopel är 'den förste bland jämlika' — han har hedersplats men inte jurisdiktion över andra ortodoxa kyrkor. Varje lokal kyrka är autokefal (självstyrande)." },
  { question: "Vad är sakramenten — kortfattat?", answer: "Sakramenten (mysterierna) är heliga handlingar genom vilka Gud ger sin nåd. De sju är: dopet, konfirmationen (myrrasmörjelsen), nattvarden (eukaristin), bikten, äktenskapet, prästvigningen och de sjukas smörjelse." },
  { question: "Ortodoxins signalement — rökelse, ikoner, stort skägg?", answer: "Rökelse symboliserar bönerna som stiger upp till Gud. Ikoner är fönster mot himlen, inte avgudar. Skägget på präster är en gammal tradition som symboliserar visdom och att man inte ändrar Guds skapelse. De sju ekumeniska koncilierna definierar den ortodoxa trons gränser." },
  { question: "Vad för typ av Treenighet följer ortodoxa?", answer: "Ortodoxin bekänner Treenigheten enligt de ekumeniska koncilierna: Fadern, Sonen och den Helige Ande — tre personer, en Gud. Helige Ande utgår från Fadern (inte 'och Sonen' som i den västliga filioque-tillägget)." },
  { question: "Varför endast män som präster?", answer: "Ortodoxin följer den apostoliska traditionen där prästämbetet reserveras för män, i enlighet med Kristi val av de tolv apostlarna. Det handlar inte om kvinnors värde (Maria är den mest ärade av alla helgon) utan om ämbetets specifika karaktär." },
  { question: "Får präster ha fru och barn?", answer: "Ja! Ortodoxa präster kan vara gifta — de måste dock gifta sig före prästvigningen. Biskopar måste vara ogifta (vanligtvis munkar). Gifta präster med familjer är vanliga och värderas högt i församlingslivet." },
  { question: "Vad är en liturgi, vesper, vigilia?", answer: "Liturgin (Gudomliga liturgin) är eukaristins gudstjänst — kyrkans centrala handling. Vesper är aftonens bönegudstjänst. Vigilia är en allnattlig gudstjänst som kombinerar vesper och morgongudstjänst, ofta före stora högtider." },
  { question: "Är ortodoxin bara för greker, ryssar och serber?", answer: "Absolut inte! Ortodoxin är universell — den finns på alla kontinenter och i alla kulturer. I Sverige finns svenska ortodoxa församlingar. Tron är densamma oavsett språk eller nationalitet. Kristus kom för alla folk." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <FAQSection
        id="ny"
        title="Ny till Tron"
        subtitle="Grunderna"
        items={nyFAQ}
      />

      <QuoteBanner
        quote="Gud blev människa för att människan skulle kunna bli gudomlig"
        source="Athanasios den Store"
        bgImage={quoteBg}
      />

      <FAQSection
        id="lard"
        title="Fördjupning"
        subtitle="För den som vill lära mer"
        items={lardFAQ}
        variant="dark"
      />

      <QuoteBanner
        quote="Kom och se"
        source="Johannes 1:46"
        bgImage={candlesBg}
      />

      <Footer />
    </div>
  );
};

export default Index;
