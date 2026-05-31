import type { LearningContent } from './maturaLearningTypes'

export const maturaLearningContent: LearningContent = {
  "version": "1.0.0",
  "generatedFor": "matura-racunalnistvo-kviz",
  "sections": [
    {
      "id": "strojna-oprema-os-enote",
      "title": "Strojna oprema, OS, enote in pretvorbe",
      "shortTitle": "Strojna oprema + OS",
      "icon": "Cpu",
      "color": "cyan",
      "description": "Osnovni pojmi iz računalniške strojne opreme, operacijskih sistemov, pomnilnikov, diskov, priključkov in računanja z enotami.",
      "examImportance": "Zelo pogosto v 1. delu mature. Prinaša veliko hitrih točk, če poznaš pojme in osnovne formule.",
      "lessons": [
        {
          "id": "enote-pretvorbe",
          "title": "Enote in pretvorbe",
          "summary": "Pri maturi se pogosto mešajo decimalne in binarne enote ter bit/s in B/s. Ključ je, da vedno najprej pogledaš, ali je podatek v bitih ali bajtih ter ali gre za GB ali GiB.",
          "keyPoints": [
            "1 B = 8 bitov.",
            "Proizvajalci diskov običajno uporabljajo decimalne enote: 1 GB = 1.000.000.000 B.",
            "Operacijski sistemi pogosto prikazujejo binarne enote: 1 GiB = 1.073.741.824 B.",
            "1 TB disk se zato v operacijskem sistemu pogosto prikaže kot približno 931,32 GiB.",
            "Pri prenosu podatkov je hitrost pogosto v Mb/s, velikost datoteke pa v MB ali GB. Zato moraš bite pretvoriti v bajte."
          ],
          "formulas": [
            {
              "label": "biti v bajte",
              "formula": "B = bit / 8",
              "example": "8 Mb/s = 1 MB/s"
            },
            {
              "label": "GB v GiB",
              "formula": "GiB = GB × 1.000.000.000 / 1.073.741.824",
              "example": "1 TB = 1000 GB ≈ 931,32 GiB"
            },
            {
              "label": "čas prenosa",
              "formula": "čas = velikost / hitrost",
              "example": "Če je hitrost 1 MB/s, se datoteka 173 MB prenaša 173 s."
            }
          ],
          "examples": [
            {
              "question": "Proizvajalec navaja 4 GB RAM. Koliko je to približno v GiB?",
              "solution": "4 × 1.000.000.000 / 1.073.741.824 = 3,725 GiB.",
              "answer": "3,725 GiB"
            },
            {
              "question": "Prenosna hitrost je 8 Mb/s. Koliko je to v MB/s?",
              "solution": "Ker je 1 B = 8 bitov, 8 Mb/s delimo z 8.",
              "answer": "1 MB/s"
            }
          ],
          "miniQuiz": [
            {
              "question": "Zakaj 1 TB disk v sistemu ni prikazan kot 1000 GiB?",
              "answer": "Ker proizvajalec uporablja decimalne GB/TB, operacijski sistem pa pogosto binarne GiB/TiB."
            },
            {
              "question": "Kaj je več: 1 GB ali 1 GiB?",
              "answer": "1 GiB je večji, ker ima 1.073.741.824 B, 1 GB pa 1.000.000.000 B."
            }
          ]
        },
        {
          "id": "procesor",
          "title": "Procesor, takt in vodila",
          "summary": "Procesor izvaja ukaze. Takt pove, koliko ciklov na sekundo lahko izvede. Pri osnovnih maturitetnih računih se pogosto predpostavi, da en ukaz traja en cikel.",
          "keyPoints": [
            "CPE/CPU je centralna procesna enota.",
            "Takt merimo v Hz, MHz ali GHz.",
            "1 GHz pomeni 1.000.000.000 ciklov na sekundo.",
            "RISC ima praviloma preprostejše ukaze, CISC kompleksnejše ukaze.",
            "Overclocking pomeni povečanje taktne frekvence nad privzeto vrednost.",
            "Vodilo povezuje komponente in prenaša podatke. Prepustnost je odvisna od širine vodila in frekvence."
          ],
          "formulas": [
            {
              "label": "čas enega cikla",
              "formula": "T = 1 / f",
              "example": "Pri 3,30 GHz je en cikel približno 0,303 ns."
            },
            {
              "label": "čas za n ukazov",
              "formula": "čas = n / frekvenca",
              "example": "10 ukazov pri 3,30 GHz traja približno 3,03 ns."
            },
            {
              "label": "prepustnost vodila",
              "formula": "prepustnost = frekvenca × širina vodila / 8",
              "example": "3200 MHz × 32 bit / 8 = 12,8 GB/s; pri DDR/več prenosih je rezultat odvisen od navodila naloge."
            }
          ],
          "examples": [
            {
              "question": "Procesor RISC deluje pri 3,30 GHz. Koliko časa potrebuje za 10 ukazov, če en ukaz traja en cikel?",
              "solution": "3,30 GHz = 3,30 × 10^9 ciklov/s. 10 / 3,30 × 10^9 s = 3,03 ns.",
              "answer": "3,03 ns"
            }
          ],
          "miniQuiz": [
            {
              "question": "V kateri enoti merimo takt procesorja?",
              "answer": "V hercih: Hz, MHz ali GHz."
            },
            {
              "question": "Kaj pomeni navijanje procesorja?",
              "answer": "Povečanje taktne frekvence komponent nad privzeto vrednost."
            }
          ]
        },
        {
          "id": "pomnilniki",
          "title": "Pomnilniki: RAM, ROM, ECC, VRAM in cache",
          "summary": "Pomnilniki se razlikujejo po hitrosti, trajnosti zapisa in namenu. Na maturi je pomembno, da znaš ločiti RAM, ROM, VRAM, predpomnilnik in ECC.",
          "keyPoints": [
            "RAM je delovni pomnilnik. Ob izklopu se njegova vsebina izgubi.",
            "ROM je bralni pomnilnik, namenjen trajno zapisanim podatkom ali programu.",
            "ECC RAM zna zaznati in popravljati napake v pomnilniku.",
            "VRAM uporablja grafična kartica za shranjevanje grafičnih podatkov.",
            "Predpomnilnik/cache je zelo hiter pomnilnik blizu procesorja.",
            "32-bitni OS običajno ne more uporabiti celotnih 16 GB RAM."
          ],
          "formulas": [],
          "examples": [
            {
              "question": "Kaj je značilno za ECC pomnilnik?",
              "solution": "ECC pomnilnik zaznava in popravlja napake, ki nastanejo pri shranjevanju ali prenosu podatkov.",
              "answer": "Zaznavanje in popravljanje napak."
            },
            {
              "question": "Katera komponenta uporablja VRAM?",
              "solution": "VRAM uporablja grafična kartica oziroma GPE/GPU.",
              "answer": "Grafična kartica."
            }
          ],
          "miniQuiz": [
            {
              "question": "Kateri pomnilnik izgubi vsebino ob izklopu?",
              "answer": "RAM."
            },
            {
              "question": "Za kaj je namenjen cache?",
              "answer": "Za zelo hiter dostop do pogosto uporabljenih podatkov in ukazov."
            }
          ]
        },
        {
          "id": "diski-shranjevanje",
          "title": "Diski, SSD, M.2, defragmentacija in CHKDSK",
          "summary": "Shranjevalne naprave so pogosto tema kratkih vprašanj. Treba je ločiti HDD, SSD, M.2, SATA, NVMe, datotečne sisteme in osnovna vzdrževalna opravila.",
          "keyPoints": [
            "HDD uporablja magnetne plošče in mehanske dele.",
            "SSD nima gibljivih delov in je praviloma hitrejši.",
            "M.2 je priključek/oblika modula, pogosto za SSD.",
            "SATA in NVMe sta pogosta vmesnika/protokola za shranjevanje podatkov.",
            "Defragmentacija združi razdrobljene dele datotek na HDD; pri SSD praviloma ni potrebna.",
            "Bad sector je poškodovan sektor diska.",
            "CHKDSK preverja disk in lahko popravi napake datotečnega sistema."
          ],
          "formulas": [],
          "examples": [
            {
              "question": "Kaj naredi ukaz CHKDSK C: /F?",
              "solution": "Na pogonu C: preveri disk in poskusi popraviti najdene napake.",
              "answer": "Preveri in popravlja napake na disku C:."
            },
            {
              "question": "Kaj pomeni bad sector?",
              "solution": "To je poškodovan sektor, ki ne more zanesljivo shranjevati podatkov.",
              "answer": "Poškodovan sektor diska."
            }
          ],
          "miniQuiz": [
            {
              "question": "Zakaj defragmentacija ni tipična za SSD?",
              "answer": "Ker SSD nima mehanske glave in mu razporeditev blokov ne povzroča enakih zamikov kot pri HDD."
            }
          ]
        },
        {
          "id": "datotecni-sistemi-os",
          "title": "Datotečni sistemi, BIOS/UEFI in zagon sistema",
          "summary": "Operacijski sistem uporablja datotečni sistem za organizacijo podatkov. BIOS/UEFI pa se pojavi pred zagonom OS in določa, iz katere naprave se sistem zažene.",
          "keyPoints": [
            "FAT32 ima omejitev velikosti posamezne datoteke približno 4 GiB.",
            "NTFS je pogost datotečni sistem v Windows.",
            "ext4 je pogost datotečni sistem v Linux.",
            "ReFS je Microsoftov datotečni sistem z odpornostjo na napake.",
            "Particioniranje je logična razdelitev diska na več delov.",
            "BIOS/UEFI omogoča nastavljanje zagonskega vrstnega reda naprav.",
            "Če želiš zagnati računalnik z USB ključka, pogosto spremeniš boot order v BIOS/UEFI."
          ],
          "formulas": [],
          "examples": [
            {
              "question": "Zakaj na 64 GB USB ključek ne moremo kopirati 5 GiB ZIP datoteke, če je formatiran kot FAT32?",
              "solution": "Ker FAT32 ne podpira posameznih datotek, večjih od približno 4 GiB.",
              "answer": "Zaradi omejitve FAT32."
            },
            {
              "question": "Kaj je particioniranje?",
              "solution": "Particioniranje je logična razdelitev diska na dva ali več delov.",
              "answer": "Logična razdelitev diska."
            }
          ],
          "miniQuiz": [
            {
              "question": "Kje spremeniš zagonski vrstni red naprav?",
              "answer": "V BIOS/UEFI nastavitvah."
            }
          ]
        },
        {
          "id": "raid-prikljucki-monitorji",
          "title": "RAID, priključki, monitorji in barvni modeli",
          "summary": "Ta sklop združuje več kratkih pojmov, ki se pogosto pojavijo kot izbira pravilnega odgovora.",
          "keyPoints": [
            "RAID 0 poveča hitrost, a ne varnosti.",
            "RAID 1 zrcali podatke na dva diska.",
            "RAID 5 potrebuje vsaj tri diske in omogoča odpoved enega diska.",
            "RAID 10 potrebuje vsaj štiri diske in združuje zrcaljenje ter striping.",
            "PCI-e je sodoben vmesnik za grafične kartice.",
            "VGA je analogni video priključek, DVI/HDMI sta digitalna oziroma lahko digitalna.",
            "USB-C lahko prenaša podatke, napajanje in video, če naprave to podpirajo.",
            "RGB se uporablja za prikaz na zaslonih, CMYK pri tiskanju.",
            "Svetilnost zaslona merimo v cd/m².",
            "Odzivni čas monitorja je čas prehoda iz ene barve v drugo."
          ],
          "formulas": [],
          "examples": [
            {
              "question": "Koliko diskov najmanj potrebuje RAID 10?",
              "solution": "RAID 10 je kombinacija RAID 1 in RAID 0, zato potrebuje vsaj 4 diske.",
              "answer": "4 diske."
            },
            {
              "question": "Kateri barvni model uporabljajo zasloni?",
              "solution": "Zasloni praviloma uporabljajo RGB, ker sliko sestavljajo rdeča, zelena in modra svetloba.",
              "answer": "RGB."
            }
          ],
          "miniQuiz": [
            {
              "question": "Kateri barvni model je tipičen za tiskanje?",
              "answer": "CMY oziroma CMYK."
            }
          ]
        }
      ]
    },
    {
      "id": "omrezja",
      "title": "Omrežja",
      "shortTitle": "Omrežja",
      "icon": "Network",
      "color": "violet",
      "description": "IPv4, IPv6, subnetting, VLSM, stikala, usmerjevalniki, kabli in protokoli. To je ena najpomembnejših tem za 2. del mature.",
      "examImportance": "Zelo pogosto kot strukturirana naloga. Če znaš postopek, lahko dobiš veliko točk.",
      "lessons": [
        {
          "id": "osnove-omrezij",
          "title": "Osnovni pojmi omrežij",
          "summary": "Računalniško omrežje povezuje naprave, da si izmenjujejo podatke. Pri maturi moraš razumeti vlogo stikal, usmerjevalnikov, IP naslovov, MAC naslovov in privzetega prehoda.",
          "keyPoints": [
            "IP naslov določa napravo v omrežju na omrežni plasti.",
            "MAC naslov je fizični naslov omrežnega vmesnika.",
            "Stikalo/switch povezuje naprave znotraj lokalnega omrežja.",
            "Usmerjevalnik/router povezuje različna omrežja.",
            "Privzeti prehod je IP naslov usmerjevalnika v istem lokalnem omrežju.",
            "Strežnik ponuja storitve, odjemalec jih uporablja.",
            "Firewall filtrira promet glede na pravila."
          ],
          "formulas": [],
          "examples": [
            {
              "question": "Katera naprava povezuje različna omrežja?",
              "solution": "Različna omrežja povezuje usmerjevalnik.",
              "answer": "Usmerjevalnik/router."
            },
            {
              "question": "Kaj je privzeti prehod?",
              "solution": "To je IP naslov usmerjevalnika, prek katerega naprava dostopa do drugih omrežij.",
              "answer": "IP usmerjevalnika v istem omrežju."
            }
          ],
          "miniQuiz": [
            {
              "question": "Po čem odloča switch, kam bo poslal okvir?",
              "answer": "Po MAC naslovu in MAC tabeli."
            }
          ]
        },
        {
          "id": "ipv4-cidr",
          "title": "IPv4, maske in CIDR",
          "summary": "IPv4 naslov ima 32 bitov. Maska pove, kateri del naslova je omrežni in kateri del je namenjen napravam. CIDR zapis /24, /25 ... pove število bitov omrežnega dela.",
          "keyPoints": [
            "IPv4 naslov ima obliko npr. 192.168.1.10.",
            "Maska 255.255.255.0 je enaka /24.",
            "Omrežni naslov je prvi naslov v bloku.",
            "Broadcast je zadnji naslov v bloku.",
            "Uporabni naslovi so med omrežnim in broadcast naslovom.",
            "Število vseh naslovov v bloku je 2^(32 - predpona).",
            "Število uporabnih naslovov je običajno vsi naslovi - 2."
          ],
          "formulas": [
            {
              "label": "vsi naslovi",
              "formula": "2^(32 - predpona)",
              "example": "/28: 2^(32-28) = 16 naslovov"
            },
            {
              "label": "uporabni naslovi",
              "formula": "2^(32 - predpona) - 2",
              "example": "/28: 16 - 2 = 14 uporabnih naslovov"
            }
          ],
          "subnetTable": [
            {
              "prefix": "/24",
              "mask": "255.255.255.0",
              "total": 256,
              "usable": 254,
              "blockSize": 256
            },
            {
              "prefix": "/25",
              "mask": "255.255.255.128",
              "total": 128,
              "usable": 126,
              "blockSize": 128
            },
            {
              "prefix": "/26",
              "mask": "255.255.255.192",
              "total": 64,
              "usable": 62,
              "blockSize": 64
            },
            {
              "prefix": "/27",
              "mask": "255.255.255.224",
              "total": 32,
              "usable": 30,
              "blockSize": 32
            },
            {
              "prefix": "/28",
              "mask": "255.255.255.240",
              "total": 16,
              "usable": 14,
              "blockSize": 16
            },
            {
              "prefix": "/29",
              "mask": "255.255.255.248",
              "total": 8,
              "usable": 6,
              "blockSize": 8
            },
            {
              "prefix": "/30",
              "mask": "255.255.255.252",
              "total": 4,
              "usable": 2,
              "blockSize": 4
            }
          ],
          "examples": [
            {
              "question": "Koliko uporabnih naslovov ima omrežje /28?",
              "solution": "Pri /28 je 2^(32-28) = 16 vseh naslovov. Uporabnih je 16 - 2 = 14.",
              "answer": "14 uporabnih naslovov."
            }
          ],
          "miniQuiz": [
            {
              "question": "Katera maska pripada /26?",
              "answer": "255.255.255.192."
            },
            {
              "question": "Koliko uporabnih naslovov ima /30?",
              "answer": "2 uporabna naslova."
            }
          ]
        },
        {
          "id": "subnetting-postopek",
          "title": "Postopek subnettinga",
          "summary": "Pri subnettingu moraš iz IP naslova in maske določiti omrežni naslov, prvi uporabni naslov, zadnji uporabni naslov in broadcast.",
          "keyPoints": [
            "Najprej iz predpone določi velikost bloka.",
            "Pri /28 je velikost bloka 16, zato so omrežja .0, .16, .32, .48, .64 ...",
            "Omrežni naslov je začetek bloka.",
            "Broadcast je zadnji naslov v bloku.",
            "Prvi uporabni naslov je omrežni naslov + 1.",
            "Zadnji uporabni naslov je broadcast - 1."
          ],
          "formulas": [],
          "examples": [
            {
              "question": "Določi podatke za 192.168.1.160/28.",
              "solution": "Blok /28 ima 16 naslovov. Omrežni naslov je 192.168.1.160, broadcast 192.168.1.175, prvi uporabni 192.168.1.161, zadnji uporabni 192.168.1.174.",
              "answer": "Omrežje .160, prvi .161, zadnji .174, broadcast .175."
            },
            {
              "question": "Določi podatke za 200.88.1.64/26.",
              "solution": "Blok /26 ima 64 naslovov. Omrežje je 200.88.1.64, broadcast 200.88.1.127, prvi uporabni .65, zadnji uporabni .126.",
              "answer": "Omrežje .64, prvi .65, zadnji .126, broadcast .127."
            }
          ],
          "miniQuiz": [
            {
              "question": "Če je omrežni naslov 10.0.0.32/27, kateri je broadcast?",
              "answer": "/27 ima blok 32 naslovov, zato je broadcast 10.0.0.63."
            }
          ]
        },
        {
          "id": "vlsm",
          "title": "VLSM razdeljevanje omrežij",
          "summary": "VLSM pomeni, da en večji naslovni prostor razdeliš na več podomrežij različnih velikosti. Na maturi moraš običajno razdeliti omrežje glede na število računalnikov.",
          "keyPoints": [
            "Omrežja vedno razporedi od največjega proti najmanjšemu.",
            "Za vsako omrežje izberi najmanjši blok, ki ima dovolj uporabnih naslovov.",
            "Ne pozabi, da se omrežni in broadcast naslov ne uporabljata za naprave.",
            "Naslednje omrežje se začne takoj za prejšnjim broadcast naslovom.",
            "Pri usmerjevalni povezavi z dvema napravama je pogosto dovolj /30."
          ],
          "formulas": [],
          "examples": [
            {
              "question": "Potrebuješ omrežje za 25 naprav. Katero predpono izbereš?",
              "solution": "/27 ima 32 naslovov in 30 uporabnih naslovov, zato je dovolj za 25 naprav.",
              "answer": "/27 oziroma 255.255.255.224."
            },
            {
              "question": "Potrebuješ omrežje za 10 naprav. Katero predpono izbereš?",
              "solution": "/28 ima 16 naslovov in 14 uporabnih naslovov, zato je dovolj za 10 naprav.",
              "answer": "/28 oziroma 255.255.255.240."
            }
          ],
          "miniQuiz": [
            {
              "question": "Zakaj pri VLSM najprej dodelimo največje omrežje?",
              "answer": "Da se izognemo razdrobljenosti prostora in da največje omrežje dobi dovolj velik neprekinjen blok."
            }
          ]
        },
        {
          "id": "ipv6",
          "title": "IPv6 osnove",
          "summary": "IPv6 naslovi so daljši od IPv4 in zapisani v šestnajstiškem sistemu. Pri maturi se pogosto pojavi nastavitev naslova, predpone /64 in privzetega prehoda.",
          "keyPoints": [
            "IPv6 naslov ima 128 bitov.",
            "Zapis je razdeljen na skupine šestnajstiških števil, npr. 2001:db8:1::10.",
            "Zaporedne ničle lahko skrajšamo z ::, vendar samo enkrat v naslovu.",
            "V lokalnih omrežjih je zelo pogosta predpona /64.",
            "Privzeti prehod je pogosto naslov usmerjevalnika, npr. 2001:db8:1::1."
          ],
          "formulas": [],
          "examples": [
            {
              "question": "Kaj pomeni predpona /64 pri IPv6?",
              "solution": "Prvih 64 bitov predstavlja omrežni del, preostanek pa identifikator vmesnika.",
              "answer": "64 bitov omrežnega dela."
            },
            {
              "question": "Kolikokrat lahko v enem IPv6 naslovu uporabiš ::?",
              "solution": "Samo enkrat, ker bi drugače naslov postal dvoumen.",
              "answer": "Enkrat."
            }
          ],
          "miniQuiz": [
            {
              "question": "Ali je 2002:A:B:C::10 krajši zapis IPv6 naslova?",
              "answer": "Da, :: pomeni zaporedje ničelnih skupin."
            }
          ]
        },
        {
          "id": "protokoli-in-storitve",
          "title": "Protokoli in omrežne storitve",
          "summary": "Pri kratkih vprašanjih se pogosto pojavljajo protokoli in storitve. Za maturo je dovolj, da znaš povezati kratico z osnovnim pomenom.",
          "keyPoints": [
            "DHCP samodejno dodeljuje IP nastavitve napravam.",
            "DNS prevaja domenska imena v IP naslove.",
            "HTTP/HTTPS se uporablja za spletne strani.",
            "SMTP se uporablja za pošiljanje elektronske pošte.",
            "TCP je zanesljiv in vzpostavi povezavo.",
            "UDP je hitrejši, brez vzpostavljene povezave in brez zagotovljene dostave.",
            "ICMP se uporablja pri ukazu ping.",
            "ARP povezuje IPv4 naslov z MAC naslovom v lokalnem omrežju."
          ],
          "formulas": [],
          "examples": [
            {
              "question": "Kateri protokol samodejno dodeli IP naslov?",
              "solution": "DHCP dodeli IP naslov, masko, privzeti prehod in DNS.",
              "answer": "DHCP."
            },
            {
              "question": "Kaj preverja ukaz ping?",
              "solution": "Ping s pomočjo ICMP preverja dosegljivost druge naprave.",
              "answer": "Dosegljivost naprave."
            }
          ],
          "miniQuiz": [
            {
              "question": "Kateri protokol je primeren za prenos, kjer je pomembna hitrost in ni nujno potrjevanje vsakega paketa?",
              "answer": "UDP."
            }
          ]
        },
        {
          "id": "kabli-naprave-mac",
          "title": "Kabli, naprave in MAC tabela",
          "summary": "Sheme v maturi pogosto vključujejo stikala, usmerjevalnike, računalnike in različne povezave. Pomembno je razumeti, katera naprava je v istem omrežju in kako switch posreduje promet.",
          "keyPoints": [
            "Raven UTP kabel se tipično uporablja med računalnikom in stikalom.",
            "Križni kabel se je uporabljal za povezavo podobnih naprav, npr. switch-switch ali PC-PC, če naprave nimajo Auto-MDI/MDIX.",
            "Optični medij je primeren za večje razdalje in visoke hitrosti.",
            "Switch gradi MAC tabelo iz izvornih MAC naslovov.",
            "Če switch ne pozna ciljnega MAC naslova, okvir razpošlje po več vratih.",
            "Router ločuje broadcast domene."
          ],
          "formulas": [],
          "examples": [
            {
              "question": "Kaj vsebuje MAC tabela stikala?",
              "solution": "Povezavo med MAC naslovom in fizičnim priključkom oziroma vrati stikala.",
              "answer": "MAC naslov in vrata stikala."
            },
            {
              "question": "Katera naprava ločuje dve IP omrežji?",
              "solution": "Usmerjevalnik oziroma router.",
              "answer": "Router."
            }
          ],
          "miniQuiz": [
            {
              "question": "Zakaj za daljšo povezavo pogosto uporabimo optiko?",
              "answer": "Ker omogoča večje razdalje in visoke hitrosti z manj motnjami."
            }
          ]
        }
      ]
    }
  ]
}
