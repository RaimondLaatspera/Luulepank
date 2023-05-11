const poems = {
  1: { // No risk
    et: [
      {
        title: '<span class="bold">Vooruse võlu</span>',
        poem: `
          Kui näen ja kuulen sind,<br>
          siis usun salamahti,<br>
          et noa ja kahvliga<br>
          end võtad riidest lahti.<br><br>
          (1965)
        `,
        author: '<span class="bold">Betti Alver.</span> <span class="italic">Antoloogia "Eesti luule", 1967</span>',
      },
      {
        title: '<span class="bold">Ei tule luule tuulest</span>',
        poem: `
          Luule, see ei tule tuulest<br>
          ega kuku käisest ka,<br>
          ära sunni, ära keela –<br>
          kõik see oleks asjata.<br><br>
          Luule, see on leekiv tõde,<br>
          veri sinu südamest,<br>
          seda pead sa ilmutama,<br>
          hoolimata enesest.<br><br>
          (1894)
        `,
        author: '<span class="bold">Anna Haava.</span> <span class="italic">Antoloogia "Eesti luule", 1967</span>',
      },
      {
        title: '<span class="bold">Eest ära!</span>',
        poem: `
          "Eest ära, eluvanker veereb!<br>
          Eest ära – muidu alla jääd!<br>
          Või tule kaasa! Tõmba! Lükka!<br>
          Või juhi, kui sul võimsad käed!<br>
          Eest ära!" hüüab elu.<br><br>
          Eest ära! Elutee pääl seista<br>
          ei tohi, ega puhata;<br>
          see takistab, ja rutt on taga,<br>
          sest aeg ei iial seisata…<br>
          Eest ära!<br><br>
          (1906)
        `,
        author: '<span class="bold">Anna Haava.</span> <span class="italic">Antoloogia "Eesti luule", 1967</span>',
      },
      {
        title: '<span class="bold">Kes on kaevu kaevajad</span>',
        poem: `
          Kes on kaevu kaevajad,<br>
          ärgu kartku vett:<br>
          kui sa maja ehitad,<br>
          nõuab savi kätt!<br><br>
          Meheks see, kes muda maha<br>
          jätab pärast teo taha!<br>
          Puhtus tõused vägevalt<br>
          välja iga koore alt! 
        `,
        author: '<span class="bold">Lydia Koidula.</span> <span class="italic">Antoloogia "Eesti luule", 1967</span>',
      },
      {
        title: '<span class="bold">Isamaast ikka!</span>',
        poem: `
          "Isamaad ikka jälle?<br>
          Kas sa muud ei mõista siis?<br>
          Kas sa muud ei tea laulda?<br>
          Vanaks ammu läind see viis!"<br><br>
          Muud ei, jah, ma tea laulda:<br>
          isamaa – uus igavest!<br>
          Keeb see sõna minu rinnas:<br>
          hüüab puust ja õilmetest.
        `,
        author: '<span class="bold">Lydia Koidula.</span> <span class="italic">Antoloogia "Eesti luule", 1967</span>',
      },
      {
        title: '<span class="bold">Väike laul</span>',
        poem: `
          Üks väike laul oli rannas maas<br>
          kesk merekarpe ja adru.<br>
          Üks väike laul oli rannas maas<br>
          täna hommikul peale sadu.<br><br>
          Ja oli sel laulul üksainuke<br>
          merevaigune värsinarmas:<br>
          sina, sina oled mu ainuke<br>
          surmatunnini armas.<br><br>
          (1965)
        `,
        author: '<span class="bold">Ellen Niit.</span> <span class="italic">Antoloogia "Eesti luule", 1967</span>',
      },
      {
        title: '<span class="bold">Usk ja teadused</span>',
        poem: `
          Mis ustakse, seda ei teata mitte,<br>
          mis teatakse, seda ei usta mitte.<br>
          Kuidas käsid sa uskuda, kui ma juba tean?<br>
          Kuidas võid sa teada, kui sa usud?<br>
          Tahad sa uskuda, siis ära tea midagi,<br>
          tahad sa teada, siis ära usu midagi.<br><br>
          (1877)
        `,
        author: '<span class="bold">Ado Reinvald.</span> <span class="italic">Antoloogia "Eesti luule", 1967</span>',
      },
      {
        title: "",
        poem: `
          Naerame sõber, naerame nii,<br>
          et kogu maailm naerma võiks hakata.<br>
          Nutame sõber, nutame nii,<br>
          et mure saaks sedamaid lakata.<br>
          Räägime sõber, räägime nii,<br>
          et sõna maailma nakatab.<br>
          Vaikime sõber, vaikime nii,<br>
          et süda mõtetest pakatab.<br><br>
          (1961)
        `,
        author: '<span class="bold">Juhan Saar.</span> <span class="italic">Antoloogia "Eesti luule", 1967</span>',
      },
      {
        title: '<span class="bold">Kuldne kesktee</span>',
        poem: `
          Kui paras-kõrge on su lend,<br>
          saad leiba alati.<br>
          Nii mõni keskelt-läbi-vend<br>
          ju pronksi valati.<br><br>
          Kui aga asud jälgima<br>
          liig kõrgeid ideaale,<br>
          pead virelema, nälgima<br>
          või – sõitma välismaale.<br><br>
          (1934)
        `,
        author: '<span class="bold">August Sang.</span> <span class="italic">Antoloogia "Eesti luule", 1967</span>',
      },
      {
        title: '<span class="bold">Lõpp ja algus</span>',
        poem: `
          Kas tunnete: väriseb maa!<br>
          Kas kuulete: kisendab veri!<br>
          Nüüd tuleb kas ei või jaa!<br>
          Nüüd on kallastest tõusnud meri.<br>
          Olge valmis!<br><br>
          Me seisame kahe riigi väraval:<br>
          see üks on pimedus ja teine valgus.<br>
          Me, noored, ootame pilgul säraval:<br>
          nüüd see ligineb: lõpp ja algus!<br>
          Viimaks ometi.<br><br>
          (1905)
        `,
        author: '<span class="bold">Gustav Suits.</span> <span class="italic">Antoloogia "Eesti luule", 1967</span>',
      },
      {
        title: "",
        poem: `
          Su valgete hammaste naer,<br>
          su hammaste valge naer<br>
          on maikellukeste helin<br>
          sarapuusalu all hämaras,<br>
          armsam.<br><br>
          (1959)
        `,
        author: '<span class="bold">Aleksander Suuman.</span> <span class="italic">Antoloogia "Eesti luule", 1967</span>',
      },
      {
        title: '<span class="bold">∞</span>',
        poem: `
          Vaene väike Lõpmatus<br>
          nukker Kõikmahutaja<br>
          tean millest sa unistad<br>
          külmetades seal<br>
          taga-taga-taga<br><br>
          Suhkrukringliks<br>
          sasipäise poisi pihku<br>
          ihkad sa kahaneda…<br><br>
          (1965)
        `,
        author: '<span class="bold">Enn Vetemaa.</span> <span class="italic">Antoloogia "Eesti luule", 1967</span>',
      },
    ],
    en: [
      {
        title: '<span class="bold">A Little Budding Rose</span>',
        poem: `
          It was a little budding rose,<br>
          Round like a fairy globe,<br>
          And shyly did its leaves unclose<br>
          Hid in their mossy robe,<br>
          But sweet was the slight and spicy smell<br>
          It breathed from its heart invisible.<br>
          The rose is blasted, withered, blighted,<br>
          Its root has felt a worm,<br>
          And like a heart beloved and slighted,<br>
          Failed, faded, shrunk its form.<br>
          Bud of beauty, bonnie flower,<br>
          I stole thee from thy natal bower.<br>
          I was the worm that withered thee,<br>
          Thy tears of dew all fell for me;<br>
          Leaf and stalk and rose are gone,<br>
          Exile earth they died upon.<br>
          Yes, that last breath of balmy scent<br>
          With alien breezes sadly blent!
        `,
        author: '<span class="bold">Emily Bronte</span><br><span class="italic">https://www.best-poems.net</span>',
      },
      {
        title: '<span class="bold">Fall, leaves, fall</span>',
        poem: `
          Fall, leaves, fall; die, flowers, away;<br>
          Lengthen night and shorten day;<br>
          Every leaf speaks bliss to me<br>
          Fluttering from the autumn tree.<br>
          I shall smile when wreaths of snow<br>
          Blossom where the rose should grow;<br>
          I shall sing when night's decay<br>
          Ushers in a drearier day.
        `,
        author: '<span class="bold">Emily Bronte</span><br><span class="italic">https://www.best-poems.net</span>',
      },
      {
        title: '',
        poem: `
          There is a pain so utter<br>
          There is a pain – so utter –<br>
          It swallows substance up –<br>
          Then covers the Abyss with Trance –<br>
          So Memory can step<br>
          Around – across – upon it –<br>
          As one within a Swoon –<br>
          Goes safely – where an open eye –<br>
          Would drop Him – Bone by Bone
        `,
        author: '<span class="bold">Emily Dickinson.</span><br><span class="italic">https://pennyspoetry.fandom.com/wiki/There_is_a_Pain_so_utter_/_Emily_Dickinson</span>',
      },
      {
        title: '',
        poem: `
          ​​Hope is the thing with feathers<br>
          That perches in the soul,<br>
          And sings the tune without the words,<br>
          And never stops at all,<br>
          And sweetest in the gale is heard;<br>
          And sore must be the storm<br>
          That could abash the little bird<br>
          That kept so many warm.<br>
          I've heard it in the chillest land,<br>
          And on the strangest sea;<br>
          Yet, never, in extremity,<br>
          It asked a crumb of me.
        `,
        author: '<span class="bold">Emily Dickinson.</span> <span class="italic">https://poets.org/poem/hope-thing-feathers-254</span>',
      },
      {
        title: '<span class="bold">Absence</span>',
        poem: `
          My cup is empty to-night,<br>
          Cold and dry are its sides,<br>
          Chilled by the wind from the open window.<br>
          Empty and void, it sparkles white in the moonlight.<br>
          The room is filled with the strange scent<br>
          Of wistaria blossoms.<br>
          They sway in the moon's radiance<br>
          And tap against the wall.<br>
          But the cup of my heart is still,<br>
          And cold, and empty.<br>
          When you come, it brims<br>
          Red and trembling with blood,<br>
          Heart's blood for your drinking;<br>
          To fill your mouth with love<br>
          And the bitter-sweet taste of a soul.
        `,
        author: '<span class="bold">Amy Lowell</span><br><span class="italic">https://www.best-poems.net</span>',
      },
      {
        title: '<span class="bold">The Lamp of Life</span>',
        poem: `
          Always we are following a light,<br>
          Always the light recedes; with groping hands<br>
          We stretch toward this glory, while the lands<br>
          We journey through are hidden from our sight<br>
          Dim and mysterious, folded deep in night,<br>
          We care not, all our utmost need demands<br>
          Is but the light, the light! So still it stands<br>
          Surely our own if we exert our might.<br>
          Fool! Never can'st thou grasp this fleeting gleam,<br>
          Its glowing flame would die if it were caught,<br>
          Its value is that it doth always seem<br>
          But just a little farther on. Distraught,<br>
          But lighted ever onward, we are brought<br>
          Upon our way unknowing, in a dream.
        `,
        author: '<span class="bold">Amy Lowell</span><br><span class="italic">https://www.best-poems.net</span>',
      },
      {
        title: '<span class="bold">Edge</span>',
        poem: `
        The woman is perfected.<br>
        Her dead<br><br>
        Body wears the smile of accomplishment,<br>
        The illusion of a Greek necessity<br><br>
        Flows in the scrolls of her toga,<br>
        Her bare<br><br>
        Feet seem to be saying:<br>
        We have come so far, it is over.<br><br>
        Each dead child coiled, a white serpent,<br>
        One at each little<br><br>
        Pitcher of milk, now empty.<br>
        She has folded<br><br>
        Them back into her body as petals<br>
        Of a rose close when the garden<br><br>
        Stiffens and odors bleed<br>
        From the sweet, deep throats of the night flower.<br><br>
        The moon has nothing to be sad about,<br>
        Staring from her hood of bone.<br><br>
        She is used to this sort of thing.<br>
        Her blacks crackle and drag.
        `,
        author: '<span class="bold">Sylvia Plath.</span> <span class="italic">https://www.poetryfoundation.org/poems/49009/edge-56d22ab50bbc1</span>',
      },
      {
        title: '<span class="bold">Cantico del Sole</span>',
        poem: `
          The thought of what America would be like<br>
          If the Classics had a wide circulation<br>
          Troubles my sleep,<br>
          The thought of what America,<br>
          The thought of what America,<br>
          The thought of what America would be like<br>
          If the Classics had a wide circulation<br>
          Troubles my sleep.<br>
          Nunc dimittis, now lettest thou thy servant,<br>
          Now lettest thou thy servant<br>
          Depart in peace.<br>
          The thought of what America,<br>
          The thought of what America,<br>
          The thought of what America would be like<br>
          If the Classics had a wide circulation . . .<br>
          Oh well!<br>
          It troubles my sleep.
        `,
        author: '<span class="bold">Ezra Pound.</span> <span class="italic">https://www.poetryfoundation.org/poems/52318/cantico-del-sole</span>',
      },
      {
        title: '<span class="bold">A Prayer For Old Age</span>',
        poem: `
          GOD guard me from those thoughts men think<br>
          In the mind alone;<br>
          He that sings a lasting song<br>
          Thinks in a marrow-bone;<br>
          From all that makes a wise old man<br>
          That can be praised of all;<br>
          O what am I that I should not seem<br>
          For the song's sake a fool?<br>
          I pray – for word is out<br>
          And prayer comes round again –<br>
          That I may seem, though I die old,<br>
          A foolish, passionate man.
        `,
        author: '<span class="bold">William Butler Yeats.</span> <span class="italic">https://allpoetry.com/A-Prayer-For-Old-Age</span>',
      },
      {
        title: '<span class="bold">A Song</span>',
        poem: `
          I THOUGHT no more was needed<br>
          Youth to polong<br>
          Than dumb-bell and foil<br>
          To keep the body young.<br>
          <span class="italic">O who could have foretold<br>
          That the heart grows old?</span><br>
          Though I have many words,<br>
          What woman's satisfied,<br>
          I am no longer faint<br>
          Because at her side?<br>
          <span class="italic">O who could have foretold<br>
          That the heart grows old?</span><br>
          I have not lost desire<br>
          But the heart that I had;<br>
          I thOught 'twould burn my body<br>
          Laid on the death-bed,<br>
          <span class="italic">For who could have foretold<br>
          That the heart grows old?</span>
        `,
        author: '<span class="bold">William Butler Yeats.</span><br><span class="italic">https://allpoetry.com/poem/8453419-A-Song-by-William-Butler-Yeats</span>',
      },
      {
        title: '<span class="bold">A Dream</span>',
        poem: `
          In visions of the dark night<br>
          I have dreamed of joy departed—<br>
          But a waking dream of life and light<br>
          Hath left me broken-hearted.<br><br>
          Ah! what is not a dream by day<br>
          To him whose eyes are cast<br>
          On things around him with a ray<br>
          Turned back upon the past?<br><br>
          That holy dream—that holy dream,<br>
          While all the world were chiding,<br>
          Hath cheered me as a lovely beam<br>
          A lonely spirit guiding.<br><br>
          What though that light, thro' storm and night,<br>
          So trembled from afar—<br>
          What could there be more purely bright<br>
          In Truth's day-star
        `,
        author: '<span class="bold">Edgar Allan Poe</span><br><span class="italic">https://www.poetryfoundation.org</span>',
      },
      {
        title: '<span class="bold">Sonnet — To Science</span>',
        poem: `
          Science! true daughter of Old Time thou art!<br>
          Who alterest all things with thy peering eyes.<br>
          Why preyest thou thus upon the poet’s heart,<br>
          Vulture, whose wings are dull realities?<br>
          How should he love thee? or how deem thee wise,<br>
          Who wouldst not leave him in his wandering<br>
          To seek for treasure in the jewelled skies,<br>
          Albeit he soared with an undaunted wing?<br>
          Hast thou not dragged Diana from her car,<br>
          And driven the Hamadryad from the wood<br>
          To seek a shelter in some happier star?<br>
          Hast thou not torn the Naiad from her flood,<br>
          The Elfin from the green grass, and from me<br>
          The summer dream beneath the tamarind tree?
        `,
        author: '<span class="bold">Edgar Allan Poe</span><br><span class="italic">https://www.poetryfoundation.org</span>',
      },
      {
        title: '<span class="bold">To My Mother</span>',
        poem: `
          Because I feel that, in the Heavens above,<br>
          The angels, whispering to one another,<br>
          Can find, among their burning terms of love,<br>
          None so devotional as that of “Mother,”<br>
          Therefore by that dear name I long have called you—<br>
          You who are more than mother unto me,<br>
          And fill my heart of hearts, where Death installed you<br>
          In setting my Virginia's spirit free.<br>
          My mother—my own mother, who died early,<br>
          Was but the mother of myself; but you<br>
          Are mother to the one I loved so dearly,<br>
          And thus are dearer than the mother I knew<br>
          By that infinity with which my wife<br>
          Was dearer to my soul than its soul-life.
        `,
        author: '<span class="bold">Edgar Allan Poe</span><br><span class="italic">https://www.poetryfoundation.org</span>',
      },
    ],
    ru: [
      {
        title: '<span class="bold">Парус</span>',
        poem: `
          Белеет парус одинокой<br>
          В тумане моря голубом!..<br>
          Что ищет он в стране далекой?<br>
          Что кинул он в краю родном?..<br>
          Играют волны — ветер свищет,<br>
          И мачта гнется и скрыпит…<br>
          Увы! он счастия не ищет<br>
          И не от счастия бежит!<br>
          Под ним струя светлей лазури,<br>
          Над ним луч солнца золотой…<br>
          А он, мятежный, просит бури,<br>
          Как будто в бурях есть покой!
        `,
        author: '<span class="bold">Михаил Лермонтов.</span> <span class="italic">https://www.culture.ru/poems/36610/parus-beleet-parus-odinokii</span>',
      },
      {
        title: '<span class="bold">Маша и каша</span>',
        poem: `
          Вот это –<br>
          хорошая девочка.<br>
          Зовут эту девочку Маша!<br>
          А это –<br>
          её тарелочка.<br>
          А в этой тарелочке…<br><br>
          Нет, не каша,<br>
          нет, не каша,<br>
          и не угадали!<br>
          Села Маша,<br>
          съела кашу<br>
          Всю,<br>
          сколько дали!
        `,
        author: '<span class="bold">Эмма Мошковская</span>',
      },
      {
        title: '<span class="bold">Все по-старому</span>',
        poem: `
          “Всё по-старому…- сказала нежно.<br>
          Всё по-старому…”<br>
          Но смотрел я в очи безнадежно —<br>
          Всё по-старому…<br>
          Улыбалась, мягко целовала —<br>
          Всё по-старому…<br>
          Но чего-то все недоставало —<br>
          Всё по-старому!..
        `,
        author: '<span class="bold">Игорь Северянин.</span> <span class="italic">Июль 1909</span>',
      },
      {
        title: '<span class="bold">Случай</span>',
        poem: `
          Судьбою нашей правит Случай,<br>
          И у него такая стать,<br>
          Что вдруг пролившеюся тучей<br>
          Он может насмерть захлестать.<br><br>
          Но он же может дать такое<br>
          Блаженство каждому из нас,<br>
          Что пожалеешь всей душою<br>
          О жизни, данной только раз!
        `,
        author: '<span class="bold">Игорь Северянин. 1929</span><br><span class="italic">https://slova.org.ru/severianin/slichay/</span>',
      },
      {
        title: '<span class="bold">Не более, чем сон</span>',
        poem: `
        Мне удивительный вчера приснился сон:<br>
        Я ехал с девушкой, стихи читавшей Блока.<br>
        Лошадка тихо шла. Шуршало колесо.<br>
        И слезы капали. И вился русый локон...<br><br>
        И больше ничего мой сон не содержал...<br>
        Но потрясенный им, взволнованный глубоко,<br>
        Весь день я думаю, встревожено дрожа,<br>
        О странной девушке, не позабывшей Блока...
        `,
        author: '<span class="bold">Игорь Северянин.</span><br><span class="italic">https://slova.org.ru/severianin/ne_bolee_chem_son/</span>',
      },
    ],
  },
  2: { // Low risk
    et: [
      {
        title: '<span class="bold">tantsutunnid gravitatsiooniga</span>',
        poem: `
          tantsivad sinuga, gravitatsioon,<br>
          kõik. aga tunnevad samme vaid julged.<br>
          sul on see julm, aga võrdsustav joon:<br>
          meelitad mõlemad: kivi ja sulge.<br><br>
          pea sinu maadligivajutav kroon,<br>
          sinna, kus juhid mind, kuulekalt astun.<br>
          armastan raskelt sind, gravitatsioon,<br>
          ega ei vahetaks tiibade vastu.<br>
        `,
        author: '<span class="bold">Eda Ahi.</span> <span class="italic">"Gravitatsioon", 2013</span>',
      },
      {
        title: '<span class="bold">toost</span>',
        poem: `
          nüüd, kallis, tõstkem klaasid! ütle toost.<br>
          ju pillerkaari täna täis me õu.<br>
          seal eile oli õnn veel. täna koost<br>
          meil laguneda lasta leidsin jõu.<br><br>
          kuid täna löögem kokku. löögem juba!<br>
          veel mõtlen sinust kaua, ma ei salga.<br>
          kuid enam meie tühja õue, luban,<br>
          ma iialgi ei tõsta oma jalga.
        `,
        author: '<span class="bold">Eda Ahi.</span> <span class="italic">"Maskiball", 2012</span>',
      },
      {
        title: '<span class="bold">luuletus</span>',
        poem: `
          küll suruda sind karmilt tahtsin vormi<br>
          ma arvasin: ehk taltsutaks sind värss.<br>
          nii tunduski. kuid vaikus enne tormi<br>
          see oli vaid. su padutundlik kärss<br><br>
          sai peagi minu plaanist haisu ninna<br>
          kui treisin just üht väga tähtsat rida,<br>
          sa ärkasid ja nähvasid: "no mida!?!"<br>
          ning pidingi sul lõpuks laskma minna.<br><br>
          ma loodan, et sul raisal, meel on must –<br>
          sust iial nüüd ei saagi luuletust!
        `,
        author: '<span class="bold">Eda Ahi.</span> <span class="italic">"Maskiball", 2012</span>',
      },
      {
        title: "",
        poem: `
          kui sul tuju hea, siis käsi kokku löö<br>
          või käega lehvita ja põruta: adjöö.<br>
          kui sul tuju hea,<br>
          ei pruugi seda kellelegi näidata.<br>
          kui tuju hea, siis kas või käega löö.
        `,
        author: '<span class="bold">Eda Ahi.</span> <span class="italic">"Maailma avastamine", 2021</span>',
      },
      {
        title: "",
        poem: `
          tuhat ja tuline, kutsuge lastekaitse!<br>
          mulle antakse sööki, mis üldse ei maitse.<br>
          just nii pröökab kõigi lompide hirm,<br>
          nina all kokandusimede virn.
        `,
        author: '<span class="bold">Eda Ahi.</span> <span class="italic">"Maailma avastamine", 2021</span>',
      },
      {
        title: '<span class="bold">Õhtu</span>',
        poem: `
          poodled koju<br>
          jalad aga<br>
          juba tantsuvalmis<br>
          viskad mõne minutiga<br>
          õhtusöögi valmis<br>
          vaatad teise silmaga<br>
          et mida maailm kärab<br>
          ja siis tõttad õhtuellu –<br>
          see on sinu päralt
        `,
        author: '<span class="bold">Ave Alavainu.</span> <span class="italic">LR 9, 2017</span>',
      },
      {
        title: '<span class="bold">Öö</span>',
        poem: `
          kuu segab, päike läinud looja –<br>
          ei tule und.<br>
          kus oled nüüd, sa öise ilma looja –<br>
          öös lahustund<br>
          vist oled hingelt<br>
          sa nii nagu ma:<br>
          ma magan küll,<br>
          kuid magatud ei saa
        `,
        author: '<span class="bold">Ave Alavainu.</span> <span class="italic">LR 9, 2017</span>',
      },
      {
        title: '<span class="bold">Vanadus</span>',
        poem: `
          …aina istud ja teed plaane —<br>
          inimene vana.<br>
          Kargad püsti, sahmid ringi<br>
          nagu takkus kana.<br>
          Suurtes suhtlemistes augud.<br>
          Väikseid ei sea sisse.<br>
          Nii sa tasapisi imbud<br>
          äraminemisse…
        `,
        author: '<span class="bold">Ave Alavainu.</span> <span class="italic">LR/9, 2017</span>',
      },
      {
        title: "",
        poem: `
          Kaotaja kiituseks laulan,<br>
          sest võitjale lauldakse niigi;<br>
          kurva ees kummardan,<br>
          löödu ees langetan pea.<br>
          Maailmast loobuja loob,<br>
          leiab unedes eneseriigi;<br>
          tõeluse taluja salajõudu<br>
          ja -suurust keegi ei tea.<br>
          Kaotaja kiituseks laulan<br>
          ja ilmaolija iluks;<br>
          põlatu pärgan, ta kõrgele<br>
          laubale vajutan suu –<br>
          sellele, kes suudab selgust<br>
          puuduvast kogu eluks<br>
          kerge ja sirgena kanda,<br>
          olen ma tuumani truu.
        `,
        author: '<span class="bold">Doris Kareva.</span> <span class="italic">"Maailma asemel", 1992</span>',
      },
      {
        title: "",
        poem: `
          3<br><br>
          Maailm ununeb, moondub ja voolab.<br>
          Kõik, mis koguneb, koondub ja kaob.<br>
          Veres rändamas tähtede soola,<br>
          mälus purpurse pulsina taob:<br>
          ära usu! Su olev on olnu.<br>
          Ära karda – kõik kordumas pääs.<br>
          Mida päriselt kunagi polnud,<br>
          on ainus, mis alati käes.
        `,
        author: '<span class="bold">Doris Kareva.</span> <span class="italic">“Maailma asemel”, 1992</span>',
      },
      {
        title: "",
        poem: `
          Kõigest on kirjutatud, kõigest on lauldud.<br>
          Ja see, mis veel kirjutatakse-lauldakse,<br>
          loeb ikka vähem, kostab ikka nõrgemalt<br>
          läbi meretuule õunapuudes ja kuldnoka-<br>
          poegade näljase sädina pesakastides<br>
          luuletajate peade kohal. Mida kauem<br>
          elad, räägid ja kirjutad, seda selgemaks saab,<br>
          et elad saarel, mis on vana ja kulunud<br>
          ja selle saare all on teine saar,<br>
          lähemal tulele, lähemal ehk tõelegi,<br>
          kuid kaugemal sõnadest, mida meie siin<br>
          ütleme üksteisele ja Läänemere tuulde.
        `,
        author: '<span class="bold">Jaan Kaplinski.</span> <span class="italic">"Öölinnud, öömõtted", 1998</span>',
      },
      {
        title: `
          <span class="bold">DELFTIS <br>
          Johannes Vermeerile</span>
        `,
        poem: `
          Hõredate harjaste sahin lõuendil.<br>
          Kuula. Sel linnal on sinu nimi –<br>
          see kõlab üha enamatel huultel Rotterdami väravas<br><br>
          ja raeplatsi kitsaste põiktänavate nurgil. Püsiv vihmaudu<br>
          peseb tolmu kunagise sadamalinna igivanalt fassaadilt,<br>
          hallid majad helklevad peaaegu hõbedaselt<br>
          sellal kui vett valgub kanalitesse üha juurde.<br>
          Siin sa maalisid ja uskusid, siin sa armastasid,<br>
          vihkasid. Uskusid. Varem või hiljem leiab kõik<br>
          oma vastandpildi – vesi taevas, taevas maas –<br>
          ja minevik on ainult oleviku lukuaugu läbi<br>
          nähtud camera obscura. Hillitsetud<br>
          harjased. Värskeltsegatud värv. Teadmine, et<br>
          varem või hiljem saab igast suurest andest<br>
          kellegi sissetulek. Ikka sajab, justkui püüaks<br>
          aeglane vihm maha uhta kihti kihi järel,<br>
          näha nende sisse, jõuda tagasi algusse – sinna,<br>
          kus polnud veel esimest pintslitõmmet ega mõtetki<br>
          sellest. Inimeste sire toimekus. Vihm, mis uhub üha<br>
          rohkem vett hõbedastesse kanalitesse. Vihm.<br>
          Keegi peatub järgmisel sillal. Ikka sajab.<br>
          Nieuwe Kerk. Vihm ja valgus.
        `,
        author: '<span class="bold">Mathura.</span> <span class="italic">"Käe all voogav joon", 2013</span>',
      },
      {
        title: '<span class="bold">Kellukesed</span>',
        poem: `
          Mu väike lemmik korjab väikese<br>
          peotäie rõõmsaid märtsikellukesi ja kinnitab<br>
          veendunult, et need on lumikellukesed. Nojah,<br>
          miks peaksid need olema märtsikellukesed, kui<br>
          need on lumeraasude vahelt virgunud<br>
          ja kui täna on esimene aprill.<br>
          Pool seitse õhtul. 
        `,
        author: '<span class="bold">Mathura.</span> <span class="italic">"Kaks tuulehoogu", 2004</span>',
      },
      {
        title: '<span class="bold">Pandeemia</span>',
        poem: `
          Ükspäev saabus päev,<br>
          kui tänavatel polnud enam ühtki nägu<br><br>
          meie ainus kohustus on tervis,<br>
          kinnitati kõnetoolist<br>
          ülevalt<br><br>
          ja meie muudkui noogutasime,<br>
          ja päevad aina läksid,<br>
          kuni neist said lootusetud, loendamatud<br> 
          nädalad<br><br>
          ja kogu aeg vaid<br>
          naeratused kasvasid me maskidel,<br>
          kuniks nende varjus<br>
          pikaks kasvasid me kihvad
        `,
        author: '<span class="bold">Mathura.</span> <span class="italic">Müürileht, 2021</span>',
      },
      {
        title: '',
        poem: `
          igal hommikul ärkan tundes,<br>
          et õhku jääb väheks<br><br>
          test on negatiivne,<br>
          aga hing on ikka haige
        `,
        author: '<span class="bold">Mathura.</span> <span class="italic">Müürileht, 2021</span>',
      },
      {
        title: "",
        poem: `
          Teed on tagurpidi jõed<br>
          päevad tagurpidi ööd<br>
          põrandad tagurpidi laed<br>
          maa tagurpidi taevas<br><br>
          Pime laternasüütaja<br>
          tummadel tumedail tundidel<br>
          läidab tähed<br>
          mustadel lehekülgedel mis<br>
          tõusevad langevad lindudena<br>
          risteile<br>
          lumises aias
        `,
        author: '<span class="bold">Andres Noormets.</span> <span class="italic">"Siesta oktoobris", 1992</span>',
      },
      {
        title: "",
        poem: `
          Olla kõigile see,<br>
          mis neil puudu.<br>
          Olla endale see,<br>
          mis jääb üle.<br>
          Olla klaver: päevade valged klahvid<br>
          tuhmilt kõlaksid mustade ängita.<br>
          Saada eneseks, mõnikord.<br>
          Aimata sõnu. Neid,<br>
          mida keegi muu meelde ei sängita.
        `,
        author: '<span class="bold">Rein Raud.</span> <span class="italic">"Unelindude rasked saapad", 2016</span>',
      },
      {
        title: '<span class="bold">Untergang</span>',
        poem: `
          ma olen kimpus omaenda hullusega<br>
          olen astroloogiliselt jännis<br>
          mu taevakehad tiirlevad all<br>
          kolbakumera nii kuuma<br><br>
          ja süda pillub üle linna kiiri<br> 
          ent ma ei taba olemise tuuma<br><br>
          ent ma ei taba<br>
          elusaladust<br>
          kui kaua kõhklevana tiksun nõnda<br>
          ma lõpuks keerlen alla valamust
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">"Suur sume, suur tume", 2014</span>',
      },
      {
        title: "",
        poem: `
          kassid mängivad kahekesi<br>
          laua all täringut nagu hullud<br><br>
          must ja valge<br>
          veeretavad mustvalget kuupi<br>
          oma kummaliste reeglite järgi<br><br>
          huupi ja siis seisavad ja põrnitsevad<br>
          nelja tillukest musta täppi<br>
          nagu oleks sääl peidus mingi vastus<br><br>
          või saladus
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">"Sagittarius", 2020</span>',
      },
      {
        title: "",
        poem: `
          aga kujuta ette et valgus pole valgus<br>
          vaid lihtsalt pimedus mis<br>
          paistab meile valgusena<br><br>
          et pehme pind pole pehme<br>
          vaid puine ja jäine mis lihtsalt<br>
          annab me näppude ees illusoorselt järele<br><br>
          et kallima soe keha on aegruumi eksitus<br>
          ese vales kohas ja vale käe all<br>
          kujuta ette et<br><br>
          valgus pole valgus
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">"Sagittarius", 2020</span>',
      },
      {
        title: "",
        poem: `
          ma ammu enam ei tea<br>
          misse luuletus on:<br><br>
          see on nagu hape nagu<br>
          sapp maos mis tahab välja tulla<br><br>
          luuletus on 100% tõde<br>
          ja võib-olla on ta üsna tõsine<br><br>
          tervisehäire
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">"Signaal surnud tähelt", 2021</span>',
      },
      {
        title: '<span class="bold">Kannatusest loobumise püha teekond</span>',
        poem: `
          teadliku ja tahtmatu loobumise vahel<br>
          budismi ja alkoholismi vahel<br>
          võib olla veel väiksem samm<br>
          kui hullumeelsuse ja geniaalsuse vahel<br>
          väidavad mõned uurijad<br><br>
          millistest ülikoolidest nad oma paberid said<br>
          ma ei tea
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">"Signaal surnud tähelt", 2021</span>',
      },
      {
        title: '<span class="bold">Hall rapsoodia</span>',
        poem: `
          Vihm hakkas sadama viiliti,<br>
          tuuled puhuma iiliti.<br>
          Põllud vettisid viimati,<br>
          katuse alla koliti.<br><br>
          Suhvlites tuulati, soriti,<br>
          nokitseti ja noriti,<br>
          räksiti rauda ja viiliti,<br>
          pudeli poole piiluti.<br><br>
          Jutt öeldi laisalt ja laiguti,<br>
          halva sõnaga haugati,<br>
          naer sündis harva ja iiliti.<br>
          Vihm kukkus aknale viiliti.
        `,
        author: '<span class="bold">Hando Runnel.</span> <span class="italic">"Laulud tüdrukuga", 1967</span>',
      },
      {
        title: '<span class="bold">Talvemaastik</span>',
        poem: `
          Küla kohal korstnasuitsust sambad.<br>
          Aida taga hallid põldpüükerad<br>
          veerevad kui tuulekerged tupsud,<br>
          väledad ja vilkad,<br>
          kõhud tühjad.<br>
          Telefonitraadid tõmbunud on trammi.<br>
          Kulmukarvadesse kasvab valget härma.<br>
          Päike on, kuid külm ka tema –<br>
          puutud käega, palav pole üldse.<br>
          Lumi aga helgib-helgib,<br>
          suusajooned kaugusesse kaovad.
        `,
        author: '<span class="bold">Hando Runnel.</span> <span class="italic">"Laulud tüdrukuga", 1967</span>',
      },
      {
        title: '<span class="bold">Pidu hakkab</span>',
        poem: `
          Tulge meile, tulge meile,<br>
          Mari tuli juba tunaeile,<br>
          kaks kapsast kaenlas,<br>
          päntsak pekki põues.<br>
          Pidu hakkab pihta,<br>
          laske järgi rihma.<br>
          Murdke musta<br>
          ja võtke valget,<br>
          pange pehmet peale,<br>
          niikuinii kõik ülejäägid<br>
          söödetakse seale.
        `,
        author: `
          <span class="bold">Hando Runnel.</span><br>
          <span class="italic">"Lauluraamat ehk Mõõganeelaja ehk Kurbade kaitseks", 1972</span>
        `
      },
      {
        title: '<span class="bold">Kurbade kaitseks</span>',
        poem: `
          Kurbade kaitseks ehitan kunagi linna.<br>
          Kurbade kaitseks teen neile tellistest majad.<br>
          Kurbade kaitseks võretan aknad ja uksed.<br>
          Kurbade kaitseks panen vahid välja.<br>
          Kurbade kaitseks keelan kurbusest mõelda.<br>
          Kurbade kaitseks nõuan kõikidelt naeru.<br>
          Kurbade kaitseks kulutan aastad ja hoole.<br>
          Kurbade kaitseks ehitan kurbadelinna.
        `,
        author: `
          <span class="bold">Hando Runnel. </span><br>
          <span class="italic">"Lauluraamat ehk Mõõganeelaja ehk Kurbade kaitseks", 1972</span>
        `
      },
      {
        title: "",
        poem: `
          –mis ma sulle purjuspäi rääkisin?<br>
          –sa tahtsid kinkida oma luulekogu, aga ei<br>
          leidnud üles, otsisid tükk aega<br>
          –eh, mul pole ilmunud ühtki kogu<br>
          –aga sa lugesid oma luulet ette<br>
          –uhh, seda ka veel
        `,
        author: '<span class="bold">Peeter Sauter.</span> <span class="italic">"Damoklese mõõk ja leivanuga", 2011</span>',
      },
      {
        title: "",
        poem: `
          kui tööl ei pea käima<br>
          on hea tööd teha<br>
          salatööd ja öötööd<br>
          salatöö on armuke<br>
          töö ei tohi temast teada<br>
          läheb kadedaks<br>
          varem või hiljem tuleb kõik välja<br>
          asi võib lõppeda lahkumisavaldusega<br>
          lahutus siis lahutus<br>
          armukesega ei abiellu<br>
          võtan armukese kõrvale<br>
          parem uue töö
        `,
        author: '<span class="bold">Peeter Sauter.</span> <span class="italic">"Damoklese mõõk ja leivanuga", 2011</span>',
      },
      {
        title: "",
        poem: `
          Loom loob, lugu lõpeb<br>
          ling kaela libiseb<br>
          ja maailmal on mõte -<br>
          hiigla ja higine.<br><br>
          Mis on su hingetõmme<br>
          väärt – Marlborot või muda,<br>
          ei mäleta, kuid tunned:<br>
          mis tuleb on möödas juba.
        `,
        author: '<span class="bold">Triin Soomets.</span> <span class="italic">"Kaardipakk", 2001</span>',
      },
      {
        title: "",
        poem: `
          kui vilguvad tuled<br>
          ja maailm pöörab valgusele selja<br>
          muundub kõik<br>
          kurjakuulutavaks vaikseks sõjaks<br>
          meelte ja mõtlemise vahel
        `,
        author: `
          <span class="bold">Sirli Staub.</span><br>
          <span class="italic">"Armastan armastust või vähemalt mõtet armastusest",<br>
          2020</span>
        `,
      },
      {
        title: "",
        poem: `
          me kohtusime<br>
          alles eile<br>
          aga sellest piisas<br>
          ma naersin<br>
          sa naersid<br>
          me naersime<br>
          ja sellest piisas<br>
          et mind huvitaks<br>
          see<br>
          mida sina<br>
          minust arvad
        `,
        author: `
          <span class="bold">Sirli Staub.</span><br>
          <span class="italic">"Armastan armastust või vähemalt mõtet armastusest",<br>
          2020</span>
        `,
      },
      {
        title: "",
        poem: `
          ma ei ole närvis<br>
          sisendan endale<br>
          ja sisimas tunnen<br>
          et ei olegi<br>
          ainult mu põlved<br>
          arvavad teisiti
        `,
        author: `
          <span class="bold">Sirli Staub.</span><br>
          <span class="italic">"Armastan armastust või vähemalt mõtet armastusest",<br>
          2020</span>
        `,
      },
      {
        title: "",
        poem: `
          pisar põrandale kukkuv<br>
          kajab vaikuses kõvemini<br>
          kui ükski pomm suudaks
        `,
        author: `
          <span class="bold">Sirli Staub.</span><br>
          <span class="italic">"Armastan armastust või vähemalt mõtet armastusest",<br>
          2020</span>
        `,
      },
      {
        title: "",
        poem: `
          tühi ekraan<br>
          aku pooltühi<br>
          meil kõigil
        `,
        author: `
          <span class="bold">Sirli Staub.</span><br>
          <span class="italic">"Armastan armastust või vähemalt mõtet armastusest",<br>
          2020</span>
        `,
      },
      {
        title: '<span class="bold">Maastik</span>',
        poem: `
          päev on lahkunud üle silla<br>
          tüüne nägu ees<br>
          õhtu õhetab on lilla<br>
          taevahelk on vees<br><br>
          tee on tühi tuul on kõle<br>
          taevas kõver kuu<br>
          põlluveeres hallid õled<br>
          lumme mattund kuu
        `,
        author: '<span class="bold">Toomas Vint.</span> <span class="italic">"1968", 2018</span>',
      },
      {
        title: '<span class="bold">Vahelduva pilvitusega öö</span>',
        poem: `
          näed: pilvedes keerlevad tähed<br>
          õrnhellad päikesetähed kui lilled<br>
          kui lilled nad rohtu poevad<br><br>
          näed: tähed pilvisse poevad<br>
          öö sammub lilledest üle<br>
          pimedus puudel on süles<br><br>
          näed: põõsaid on sasimas tuul<br>
          vihm tõuseb ja vajub<br>
          vaikus taevasse kaigub
        `,
        author: '<span class="bold">Toomas Vint.</span> <span class="italic">"1968", 2018</span>',
      },
      {
        title: '<span class="bold">pealkirjata 50</span>',
        poem: `
          taevas on pilvi täis<br>
          päikest täis linde täis<br>
          linnud sajavad maha<br>
          rohu sisse liiva sisse<br>
          jääb taevane meri
        `,
        author: '<span class="bold">Toomas Vint.</span> <span class="italic">"1968", 2018</span>',
      },
      {
        title: '<span class="bold">pealkirjata 58</span>',
        poem: `
          kord lähed ja põletad väsitava linna tuhaks<br>
          varemete vahel tantsid oma suurt valssi<br>
          ja sinu operett on sentimentaalselt kurb<br>
          sest sa ei tahtnud nii palju kurja teha<br>
          sul on vaid lusikatäis mett mis pikkamööda sulab<br>
          sulab…………………………………sulab
        `,
        author: '<span class="bold">Toomas Vint.</span> <span class="italic">"1968", 2018</span>',
      },
      {
        title: "",
        poem: `
          ma ei kirjuta<br>
          vastikuid ridu<br>
          ma ei kirjuta nastikuid ridu<br>
          ma kirjutan rästikuid ridu<br>
          suuri rästikuid ridu
        `,
        author: '<span class="bold">Jüri Üdi.</span> <span class="italic">"Närvitrükk", 1971</span>',
      },
      {
        title: "",
        poem: `
          Mis on luuletaja luule?<br><br>
          See on: kui mõtled elule<br>
          ja millelegi muule.<br><br>
          Mis on see inimese osa<br>
          siin laias ilmas?<br>
          End mitte ära magada.<br>
          Pea seda silmas.
        `,
        author: '<span class="bold">Jüri Üdi.</span> <span class="italic">"Armastuskirjad", 1975</span>',
      },
      {
        title: '<span class="bold">kivilinna aikud</span>',
        poem: `
          Jaapan on kaugel<br>
          eesti on kaugemal veel<br>
          ütlevad tuuled<br><br>
          kirjutan vähe<br>
          hiljem valin ma välja<br>
          mida ma näitan<br><br>
          vaatasin palju<br>
          hiljem valiti välja<br>
          mida ma nägin
        `,
        author: '<span class="bold">Juhan Viiding.</span> <span class="italic">"Ma olin Jüri Üdi", 1978</span>',
      },
      {
        title: '<span class="bold">kolmas kallas</span>',
        poem: `
          näen lõhnalille noppimishetkel<br>
          tean kaunist naist kes kaheks pudeneb<br>
          näen ühte meest sääl kus on kolmas kallas<br>
          ja õudselt loeb kust algab lugemist
        `,
        author: '<span class="bold">Juhan Viiding.</span> <span class="italic">"Ma olin Jüri Üdi", 1978</span>',
      },
      {
        title: '<span class="bold">järv</span>',
        poem: `
          Meilt mõnda võeti ega võetud viimast.<br>
          Kord saame kõik.<br>
          Järv loorub lahti udu külmast piimast<br>
          ja ongi kõik.<br><br>
          Kõrv tabab kauge inimlooma hõike.<br>
          Ah sina seal.<br>
          Ei kuule täpselt. Ma ei jõua kõike<br>
          siin ilma peal.
        `,
        author: '<span class="bold">Juhan Viiding.</span> <span class="italic">"Ma olin Jüri Üdi", 1978</span>',
      },
      {
        title: "",
        poem: `
          su südamepuuris on vaikus<br>
          ja tuhandeaastane lind<br>
          ta oskab aga ei räägi<br>
          sest ta armastab sind
        `,
        author: '<span class="bold">Juhan Viiding.</span> <span class="italic">"Ma olin Jüri Üdi", 1978</span>',
      },
      {
        title: "",
        poem: `
          veereva elu ragin<br>
          kõik ikka igavikku<br>
          puutrepi tuttav nagin<br>
          ma kohtan päkapikku<br>
          männimetsas homme<br>
          kell kolmveerand 12<br>
          ja meil on kena komme<br>
          suudelda teineteist<br>
          puude tüved on soojad<br>
          soe on päkapikk<br>
          kusagil on looja<br>
          miski on igavik
        `,
        author: '<span class="bold">Juhan Viiding.</span> <span class="italic">"Ma olin Jüri Üdi", 1978</span>',
      },
      {
        title: '<span class="bold">Õigus</span>',
        poem: `
          Õigus olla õnnetu<br>
          Õigus olla õnnelik<br>
          Õigus põhiseaduslik<br>
          Õigus unenägudele<br>
          Õigus tegelikkusele<br>
          Õigus vaimuvaesusele<br>
          Õigus vaimurikkusele<br><br>
          Õigus jääda muutumatuks<br>
          Õigus muutuda<br>
          Õigus oma mänguasju<br>
          Käega puutuda
        `,
        author: '<span class="bold">Juhan Viiding.</span> <span class="italic">Luuleveerud; 1978</span>',
      },
    ],
    en: [
      {
        title: '<span class="bold">On The Massacre Of The Christians In Bulgaria</span>',
        poem: `
          Christ, dost Thou live indeed? or are Thy bones<br>
          Still straitened in their rock-hewn sepulchre?<br>
          And was Thy Rising only dreamed by her<br>
          Whose love of Thee for all her sin atones?<br>
          For here the air is horrid with men's groans,<br>
          The priests who call upon Thy name are slain,<br>
          Dost Thou not hear the bitter wail of pain<br>
          From those whose children lie upon the stones?<br>
          Come down, O Son of God! incestuous gloom<br>
          Curtains the land, and through the starless night<br>
          Over Thy Cross a Crescent moon I see!<br>
          If Thou in very truth didst burst the tomb<br>
          Come down, O Son of Man! and show Thy might<br>
          Lest Mahomet be crowned instead of Thee!
        `,
        author: '<span class="bold">Oscar Wilde</span><br><span class="italic">https://www.best-poems.net</span>',
      },
      {
        title: '<span class="bold">At Verona</span>',
        poem: `
          How steep the stairs within King's houses are<br>
          For exile-wearied feet as mine to tread,<br>
          And O how salt and bitter is the bread<br>
          Which falls from this Hound's table,; better far<br>
          That I had died in the red ways of war,<br>
          Or that the gate of Florence bare my head,<br>
          Than to live thus, by all things comraded<br>
          Which seek the essence of my soul to mar.<br>
          'Curse God and die: what better hope than this?<br>
          He hath forgotten thee in all the bliss<br>
          Of his gold city, and eternal day' -<br>
          Nay peace: behind my prison's blinded bars<br>
          I do possess what none can take away,<br>
          My love and all the glory of the stars.
        `,
        author: '<span class="bold">Oscar Wilde</span><br><span class="italic">https://www.best-poems.net</span>',
      },
      {
        title: '<span class="bold">Helas</span>',
        poem: `
          ​​To drift with every passion till my soul<br>
          Is a stringed lute on which all winds can play,<br>
          Is it for this that I have given away<br>
          Mine ancient wisdom, and austere control?<br>
          Methinks my life is a twice-written scroll<br>
          Scrawled over on some boyish holiday<br>
          With idle songs for pipe and virelay,<br>
          Which do but mar the secret of the whole.<br>
          Surely there was a time I might have trod<br>
          The sunlit heights, and from life's dissonance<br>
          Struck one clear chord to reach the ears of God.<br>
          Is that time dead? lo! with a little rod<br>
          I did but touch the honey of romance<br>
          And must I lose a soul's inheritance?
        `,
        author: '<span class="bold">Oscar Wilde</span><br><span class="italic">https://www.best-poems.net</span>',
      },
      {
        title: '<span class="bold">Camma</span>',
        poem: `
          ​​As one who poring on a Grecian urn<br>
          Scans the fair shapes some Attic hand hath made,<br>
          God with slim goddess, goodly man with maid,<br>
          And for their beauty's sake is loth to turn<br>
          And face the obvious day, must I not yearn<br>
          For many a secret moon of indolent bliss,<br>
          When in midmost shrine of Artemis<br>
          I see thee standing, antique-limbed, and stern?<br>
          And yet; methinks I'd rather see thee play<br>
          That serpent of old Nile, whose witchery<br>
          Made Emperors drunken,; come, great Egypt, shake<br>
          Our stage with all thy mimic pageants! Nay,<br>
          I am grown sick of unreal passions, make<br>
          The world thine Actium, me thine Anthony!
        `,
        author: '<span class="bold">Oscar Wilde</span><br><span class="italic">https://www.best-poems.net</span>',
      },
      {
        title: '<span class="bold">By The Arno</span>',
        poem: `
          The oleander on the wall<br>
          Grows crimson in the dawning light,<br>
          Though the grey shadows of the night<br>
          Lie yet on Florence like a pall.<br>
          The dew is bright upon the hill,<br>
          And bright the blossoms overhead,<br>
          But ah! the grasshoppers have fled,<br>
          The little Attic song is still.<br>
          Only the leaves are gently stirred<br>
          By the soft breathing of the gale,<br>
          And in the almond-scented vale<br>
          The lonely nightingale is heard.<br>
          The day will make thee silent soon,<br>
          O nightingale sing on for love!<br>
          While yet upon the shadowy grove<br>
          Splinter the arrows of the moon.<br>
          Before across the silent lawn<br>
          In sea-green vest the morning steals,<br>
          And to love's frightened eyes reveals<br>
          The long white fingers of the dawn<br>
          Fast climbing up the eastern sky<br>
          To grasp and slay the shuddering night,<br>
          All careless of my heart's delight,<br>
          Or if the nightingale should die.
        `,
        author: '<span class="bold">Oscar Wilde</span><br><span class="italic">https://www.best-poems.net</span>',
      },
      {
        title: '<span class="bold">Edges</span>',
        poem: `
          I’ve often wondered why she laughed<br>
          On thinking why I wondered so;<br>
          It seemed such waste that long white hands<br>
          Should touch my hands and let them go.<br><br>
          And once when we were parting there,<br>
          Unseen of anything but trees,<br>
          I touched her fingers, thoughtfully,<br>
          For more than simple niceties.<br><br>
          But for some futile things unsaid<br>
          I should say all is done for us;<br>
          Yet I have wondered how she smiled<br>
          Beholding what was cavernous.
        `,
        author: '<span class="bold">Allen Tate</span><br><span class="italic">https://www.poetryfoundation.org/poems/54015/edges-56d233e1f13e5</span>',
      },
      {
        title: '<span class="bold">The Moment</span>',
        poem: `
          The moment when, after many years<br>
          of hard work and a long voyage<br>
          you stand in the centre of your room,<br>
          house, half-acre, square mile, island, country,<br>
          knowing at last how you got there,<br>
          and say, I own this,<br><br>
          is the same moment when the trees unloose<br>
          their soft arms from around you,<br>
          the birds take back their language,<br>
          the cliffs fissure and collapse,<br>
          the air moves back from you like a wave<br>
          and you can't breathe.<br><br>
          No, they whisper. You own nothing.<br>
          You were a visitor, time after time<br>
          climbing the hill, planting the flag, proclaiming.<br>
          We never belonged to you.<br>
          You never found us.<br>
          It was always the other way round.
        `,
        author: '<span class="bold">Margaret Atwood.</span><br><span class="italic">https://allpoetry.com/poem/15757263-The-Moment-by-Margaret-Atwood</span>',
      },
      {
        title: `<span class="bold">On The Fly-Leaf Of Pound's Cantos</span>`,
        poem: `
          There are the Alps. What is there to say about them?<br>
          They don't make sense. Fatal glaciers, crags cranks climb,<br>
          jumbled boulder and weed, pasture and boulder, scree,<br>
          et l'on entend, maybe, le refrain joyeux et leger.<br>
          Who knows what the ice will have scraped on the rock it is smoothing?<br><br>
          There they are, you will have to go a long way round<br>
          if you want to avoid them.<br>
          It takes some getting used to. There are the Alps,<br>
          fools! Sit down and wait for them to crumble!
        `,
        author: `<span class="bold">Basil Bunting.</span> <span class="italic">https://allpoetry.com/On-The-Fly-Leaf-Of-Pound's-Cantos</span>`,
      },
      {
        title: '<span class="bold">Gin The Goodwife Stint</span>',
        poem: `
          The ploughland has gone to bent<br>
          and the pasture to heather;<br>
          gin the goodwife stint,<br>
          she'll keep the house together.<br><br>
          Gin the goodwife stint<br>
          and the bairns hunger<br>
          the Duke can get his rent<br>
          one year longer.<br><br>
          The Duke can get his rent<br>
          and we can get our ticket<br>
          twa pund emigrant<br>
          on a C.P.R. packet.
        `,
        author: '<span class="bold">Basil Bunting.</span> <span class="italic">https://allpoetry.com/Gin-The-Goodwife-Stint</span>',
      },
      {
        title: '<span class="bold">My hero bares his nerves</span>',
        poem: `
          My hero bares his nerves along my wrist<br>
          That rules from wrist to shoulder,<br>
          Unpacks the head that, like a sleepy ghost,<br>
          Leans on my mortal ruler,<br>
          The proud spine spurning turn and twist.<br><br>
          And these poor nerves so wired to the skull<br>
          Ache on the lovelorn paper<br>
          I hug to love with my unruly scrawl<br>
          That utters all love hunger<br>
          And tells the page the empty ill.<br><br>
          My hero bares my side and sees his heart<br>
          Tread, like a naked Venus,<br>
          The beach of flesh, and wind her bloodred plait;<br>
          Stripping my loin of promise,<br>
          He promises a secret heat.<br><br>
          He holds the wire from the box of nerves<br>
          Praising the mortal error<br>
          Of birth and death, the two sad knaves of thieves,<br>
          And the hunger's emperor;<br>
          He pulls the chain, the cistern moves.
        `,
        author: '<span class="bold">Dylan Thomas</span><br><span class="italic">https://poets.org</span>',
      },
      {
        title: '<span class="bold">Poem</span>',
        poem: `
          Your breath was shed<br>
          Invisible to make<br>
          About the soiled undead<br>
          Night for my sake,<br><br>
          A raining trail<br>
          Intangible to them<br>
          With biter's tooth and tail<br>
          And cobweb drum,<br><br>
          A dark as deep<br>
          My love as a round wave<br>
          To hide the wolves of sleep<br>
          And mask the grave.
        `,
        author: '<span class="bold">Dylan Thomas</span><br><span class="italic">https://poets.org</span>',
      },
    ],
    ru: [
      {
        title: '',
        poem: `
          Бегут задумчивые люди<br>
          Бегут задумчивые люди<br>
          Куда бегут? Зачем спешат?<br>
          У дам раскачиваются груди,<br>
          У кавалеров бороды шуршат.
        `,
        author: '<span class="bold">Данил Хармс.</span> <span class="italic">https://www.culture.ru/poems/25233/begut-zadumchivye-lyudi</span>',
      },
      {
        title: '<span class="bold">Я долго думал об орлах</span>',
        poem: `
          Я долго думал об орлах<br>
          И понял многое:<br>
          Орлы летают в облаках,<br>
          Летают, никого не трогая...
        `,
        author: '<span class="bold">Данил Хармс.</span><br><span class="italic">https://www.culture.ru/poems/25228/ya-dolgo-dumal-ob-orlakh</span>',
      },
      {
        title: '<span class="bold">Моя любовь</span>',
        poem: `
          Моя любовь<br>
          к тебе секрет<br>
          не дрогнет бровь<br>
          и сотни лет.<br><br>
          пройдут года<br>
          пройдёт любовь<br>
          но никогда<br>
          не дрогнет бровь.<br><br>
          тебя узнав<br>
          я всё забыл<br>
          и средь забав<br>
          я скучен был<br><br>
          мне стал чужим<br>
          и странным свет<br>
          я каждой даме<br>
          молвил: нет.<br><br>
          (1932 г.)
        `,
        author: '<span class="bold">Данил Хармс.</span><br><span class="italic">https://www.culture.ru/poems/25227/moya-lyubov</span>',
      },
      {
        title: '',
        poem: `
          Погибли мы в житейском поле.<br>
          Нет никакой надежды боле.<br>
          О счастье кончилась мечта —<br>
          осталась только нищета.<br><br>
          (1937 г.)
        `,
        author: '<span class="bold">Данил Хармс </span>',
      },
      {
        title: '',
        poem: `
          По вторникам над мостовой<br>
          Воздушный шар летал пустой.<br>
          Он тихо в воздухе парил;<br>
          В нем кто–то трубочку курил,<br>
          Смотрел на площади, сады,<br>
          Смотрел спокойно до среды,<br>
          А в среду, лампу потушив,<br>
          Он говорил: Ну город жив.<br><br>
          (1928 г.)
        `,
        author: '<span class="bold">Данил Хармс </span>',
      },
      {
        title: '<span class="bold">Молитва</span>',
        poem: `
          Дай мне горькие годы недуга,<br>
          Задыханья, бессонницу, жар,<br>
          Отыми и ребенка, и друга,<br>
          И таинственный песенный дар —<br>
          Так молюсь за Твоей литургией<br>
          После стольких томительных дней,<br>
          Чтобы туча над темной Россией<br>
          Стала облаком в славе лучей.<br><br>
          (1915)
        `,
        author: '<span class="bold">А.А.Ахматова.</span> <span class="italic">“Белая стая”, 1917</span>',
      },
    ],
  },
  3: { // Medium risk
    et: [
      {
        title: `
          <span class="bold">ideedemaailm elektrikitarri saatel<br>
          muutub elujõuliseks dodekafooniaks</span>
        `,
        poem: `
          naiselik multitasking<br>
          on see kui loed<br>
          platonit nirvana saatel<br>
          ning suutes edukalt<br>
          ignoreerida mõlemat<br>
          saad lõpuks aru<br>
          mida schönberg mõtles<br>
          dissonantsi emantsipatsiooni<br> 
          all tegelikult
        `,
        author: '<span class="bold">Sveta Grigorjeva.</span> <span class="italic">"American Beauty", 2018</span>',
      },
      {
        title: "",
        poem: `
          kunagi ehmusin kui<br>
          üks hea sõber ütles et<br>
          olen totaalne<br>
          meestevihkaja<br>
          mismõttes<br>
          vastasin üllatunult<br>
          ma ei vihka<br>
          mehi<br>
          ma vihkan kõiki
        `,
        author: `
          <span class="bold">Sveta Grigorjeva.</span> <span class="italic">kunagi ehmusin…<br>
          jt luuletusi, 2014</span>
        `,
      },
      {
        title: "",
        poem: `
          “seilan mööda piraadimerd<br>
          ja ükski türa mind<br>
          ei takista”<br>
          (Sveta Grigorjeva)<br><br>
          ja ma ju tean et<br>
          nende argpükslikkus ei jää märkamata<br>
          ja nad on surnud juba ammu enne mind<br>
          nagu ütles bukowski<br>
          aga õnnelikumaks see vist teda ei teind<br>
          ei tee mindki<br>
          ometigi ma istun ses seelikus<br>
          nüüd põrandale<br>
          nagu koidula ja saadan su<br>
          persse nagu grigorjeva<br>
          löö pealegi mind risti<br>
          veel ja veel ja veel<br>
          seda kauem kestab mu<br>
          valitsemisaeg<br>
          kes ütleb et see luule ei kesta<br>
          et ta pole igavikuline noh<br>
          te pole vist aru saanud et<br>
          see luule on lasnamägi<br>
          see luule on keskerakond ja<br>
          MINA<br>
          OLENGI<br>
          SAVISAAR
        `,
        author: `
          <span class="bold">Sveta Grigorjeva.</span> <span class="italic">kunagi ehmusin…<br>
          jt luuletusi, 2014</span>
        `,
      },
      {
        title: "",
        poem: `
        ära sae pekki
        millel istud sa parem
        räägi temaga
        `,
        author: `
          <span class="bold">Aapo Ilves.</span> <span class="italic">Looming 8, 2009</span>
        `,
      },
      {
        title: "",
        poem: `
          Vihkan kõiki inimesi,<br>
          kelle DNA<br>
          pole samas järjekorras<br>
          minu omaga.<br>
          Oled ilge (piiks) ja (piiks)<br>
          ja (piiks-piiks) oled ka,<br>
          kui ei kanna minu numbrit<br>
          sinu ID-kaart!<br>
          Oota ainult, juba ongi<br>
          kuri tulekul,<br>
          kui sul pole samad rõivad<br>
          seljas nagu mul!<br>
          Oled vastik (piiks) ja -<br>
          nii vist tohib? - väga loll.<br>
          kui ei vaata sulle peeglist<br>
          vastu minu moll!
        `,
        author: `
          <span class="bold">Aapo Ilves.</span> <span class="italic">ERR, kultuuriportaal, 2019</span>
        `,
      },
      {
        title: "",
        poem: `
          KUI MA ÜKSKORD VÄIKSEKS KASVAN,<br>
          VÄIKSEMAKS VEEL KUI MIKROOBID<br>
          KÕIKI SÄÄSKI HAMMUSTAN!
        `,
        author: `
          <span class="bold">Aapo Ilves.</span> <span class="italic">Täheke, 2/2005</span>
        `,
      },
      {
        title: '<span class="bold">Spordilood 3</span>',
        poem: `
          No nii, ütles spordireporter sportlasele,<br>
          sa jäid eelviimaseks.<br>
          Nojah, ütles sportlane.<br>
          No nii, ütles spordireporter<br>
          mõni aeg hiljem samale sportlasele,<br>
          sa jäid napilt esimese kuue seast välja.<br>
          Nojah, ütles sportlane.<br>
          No nii, ütles spordireporter<br>
          mõni aeg hiljem samale sportlasele,<br>
          jäidki pronksmedalist napilt ilma.<br>
          Nojah, ütles sportlane.<br>
          No nii, ütles spordireporter<br>
          mõni aeg hiljem samale sportlasele,<br>
          hõbe käes,<br>
          aga kuld jäi ikkagi saamata.<br>
          Nojah, ütles sportlane.<br>
          No nii, ütles spordireporter<br>
          mõni aeg hiljem samale sportlasele,<br>
          kuld käes, aga kergelt see ei tulnud.<br>
          Kuule, küsis sportlane vastu,<br>
          kas sa esitad lõpuks mõne küsimuse ka?<br>
          Selle peale hakkas spordireporter nutma.
        `,
        author: '<span class="bold">Jan Kaus.</span> <span class="italic">"Vasaraheitja", 2013</span>',
      },
      {
        title: '',
        poem: `
          kui mõelda elust kui<br>
          olematuse ookeani<br>
          suubuvast jõest<br>
          siis mis oleks parem<br>
          kui hargneda deltaks?
        `,
        author: '<span class="bold">Jan Kaus.</span> <span class="italic">LR/8, 2018</span>',
      },
      {
        title: '',
        poem: `
          kuidas asetada õige sõna<br>
          õigesse kohta –<br><br>
          nagu lahendaks kolmemõõtmelist ristsõna<br>
          iga kast kui tuba<br>
          kust tuleb näha tervet maja<br><br>
          aga nagu teada<br>
          on maailmal veel ka neljas mõõde<br>
          mille kestuseks<br>
          on pidev kadumine
        `,
        author: '<span class="bold">Jan Kaus.</span> <span class="italic">LR/8, 2018</span>',
      },
      {
        title: '',
        poem: `
          kuidas saada jälile armastusele?<br><br>
          see on lihtne –<br>
          tuleb tirida süda rinnust välja<br>
          asetada kaalule<br><br>
          ja veenduda, et süda oleks<br>
          ühtaegu<br>
          raske ja kerge
        `,
        author: '<span class="bold">Jan Kaus.</span>',
      },
      {
        title: '<span class="bold">21. detsember</span>',
        poem: `
          sõidad kirjandusfestivali korraldustoimkonna<br>
          koosolekule – kõrvalrajal sõidab kahuriga<br>
          sõjaväeseadeldis. uus valitsus lubab tegeleda<br>
          vähemuse probleemiga – sotsiaalmeedias<br>
          keegi kaebab, et talle kingiti kaupluses<br>
          vähemuse keeles kalender. ma ei taha rünnata<br>
          ega end kaitsta, olla välispoliitika pantvang<br>
          ega sisepoliitika vahend. ma tahan lihtsalt elada,<br>
          kui ma võin midagi paluda
        `,
        author: '<span class="bold">Igor Kotjuh.</span> <span class="italic">"Loomulikult eriline lugu", 2017</span>',
      },
      {
        title: '',
        poem: `
          tulles kinost<br>
          platoni koopast<br>
          valgus silmile<br>
          paistis valus<br><br>
          ja ma mytsin<br>
          et kino selline<br>
          oli olnud ka<br>
          toonane arm
        `,
        author: '<span class="bold">Kalju Kruusa.</span> <span class="italic">Vikerkaar, 4/2000</span>',
      },
      {
        title: '',
        poem: `
          kui sulle kirjutan<br>
          ei taotle ma muud<br>
          tyde kui tunde<br>
          tabamise täpsust<br><br>
          kogemata köitev<br>
          hääl on tähtsam<br>
          vahel kui kogetuse<br>
          köidet kirjatäht<br><br>
          ja tehes su kehale<br>
          näpuga täpukese<br>
          kestab ta tunde<br>
          kui ses on täpsust
        `,
        author: '<span class="bold">Kalju Kruusa.</span> <span class="italic">Vikerkaar, 4/2000</span>',
      },
      {
        title: '<span class="bold">Me sitemate päevade varjud</span>',
        poem: `
          Ema sai pahaseks, kui ma lapsena<br>
          Tippi ja Täppi Okseks ja Pokseks kutsusin<br>
          ja soovisin südamest, et Kriimsilm<br>
          Tädi Ruthi neelaks kuis maa uskmatud<br>
          neelas Elvas kuuekümnekolmandal,<br>
          või kuis välk selgest taevast, pire ja ere,<br>
          tigeda pähklimüüja Tartu Kaubamaja ees tuhastas,<br>
          Vihmasel kaheksakümnekaheksandal või -üheksandal.<br>
          Ja kuis põuasel, tuulisel, kahetsusväärsel ja kohatul<br>
          üheksakümneüheksandal, vastu raha ja postmarke,<br>
          vastu eelmise õhtu sigaretisuitsust kõvu rõivaid<br>
          langesid me sitemate päevade õhukesed kaldus varjud<br>
          ja kõik tuli meelde uuesti, tuli uuesti:<br>
          tulid Okse ja Pokse.
        `,
        author: '<span class="bold">Asko Künnap.</span> <span class="italic">"Kaardipakk", 2001</span>',
      },
      {
        title: "",
        poem: `
          Söö abielu leiba öös!<br><br>
          No osta maine peni, amatsoon!<br><br>
          Testi, amulett, elu maitset!<br><br>
          Ilutuule hambal elab mahe luutuli.<br><br>
          Elukunstniku teene: neetu kints nukule.<br><br>
          No kaardu, minu uni, mu draakon!<br><br>
          Esi-ema leent neelame ise.<br><br>
          Suveni reedeti eitede erinevus.<br><br>
          Elan kaarnana, manan Ra aknale.<br><br>
          Elava laev vea lavale!<br><br>
          Maag on oma monogaam.<br><br>
          Uh! hiirt aetakse luules ka teatri ihhu.<br><br>
          Enne sulisesime sinises inisemises, ilus enne.<br><br>
          Nii mattume luulemutta, miin.<br><br>
          Ka rebeneb õhk, hõbeneb erak.<br><br>
          Itk nupule surus – surus elupunkti.<br><br>
          Su kiri kajas aja kirikus.<br><br>
          Su koor kudus aias udu, krookus.<br><br>
          Elu lillele, lell ilule!<br><br>
          Kuuluta laulu, alatu luuk!
        `,
        author: '<span class="bold">Ilmar Laaban.</span> <span class="italic">"Eludrooge ego-ordule", 2008</span>',
      },
      {
        title: '<span class="bold">Narri vile</span>',
        poem: `
          Narr vilepillist valu välja ajab,<br>
          kõik sõrmeaugud täis on pisaraid,<br>
          viis müüririnnatiselt vastu kajab:<br>
          ka narri nutuga läeb hauda qningaid.<br><br>
          Ei ole kõrval uhket leinakoori,<br>
          vaid narri vilepilli qrblik huik,<br>
          loeb lahqnud vürstil kokq eluskoori.<br>
          Qi annab jumal, lahqme nii kõik!
        `,
        author: '<span class="bold">Merca.</span> <span class="italic">"Narrivile", 2002</span>',
      },
      {
        title: "",
        poem: `
          Su tule elutus.<br><br>
          Aher kile elik reha.<br><br>
          Ajaloo padi ida pool aja.<br><br>
          Isa iseasi on no isa esiasi.<br><br>
          Aga kus sa, kajakas, sukaga?<br>
          Aga kokutaja ajatu kokaga?<br>
          Aga siis tool lootsi isaga?<br>
          Aga siil oli Ilo-Liisaga!<br><br>
          Ugri – sigi, sirgu!
        `,
        author: '<span class="bold">Hannu Oittinen & Mari-Liis Roos.</span> <span class="italic">Palindroomid, 2006</span>',
      },
      {
        title: "",
        poem: `
          mind hoiab põnevil<br>
          üks asi<br>
          hoiab mind väga<br>
          põnevil<br><br>
          mitu ämbrit spermat<br>
          hiinas lendab<br>
          sekundis
        `,
        author: '<span class="bold">Jaan Pehk.</span> <span class="italic">"Tuigu kui tuled", 2006</span>',
      },
      {
        title: "",
        poem: `
          pidasin<br>
          puuhalgude üle<br>
          inkvisitsioonikohut<br><br>
          kõik jäid süüdi<br>
          ja mul on<br>
          soe
        `,
        author: '<span class="bold">Jaan Pehk.</span> <span class="italic">"Tuigu kui tuled", 2006</span>',
      },
      {
        title: "",
        poem: `
          aastakäigu kaardipakis<br>
          aprill soldat<br>
          juuli emand<br>
          august kunn<br>
          mai äss
        `,
        author: '<span class="bold">Jaan Pehk.</span> <span class="italic">"Tuigu kui tuled", 2006</span>',
      },
      {
        title: "",
        poem: `
          juhuluule juurte juures<br>
          lubatud on toored võtted<br>
          enne kui sa haarad sule<br>
          taganegu targad mõtted
        `,
        author: '<span class="bold">Jaan Pehk.</span> <span class="italic">"4", 2009</span>',
      },
      {
        title: '<span class="bold">Potid ja pannid</span>',
        poem: `
          Konsumis sisseoste tehes meenus, et koju<br>
          oleks elektripirni vaja. Tuulasin oma arust<br>
          kõik toiduainetevabad riiulivahed läbi –<br>
          elektripirne ei kuskil.<br>
          Jõudsin kassasse:<br>
          "Tere, kas teil elektripirne ka on?"<br>
          "On küll."<br>
          "Aa… olgu… ma ei pannud tähelegi.<br>
          Aga kus need olla võivad?"<br>
          "Näh, need on seal! Näete – jah, just seal<br>
          taganurgas, suurelt-suurelt on ju lae all kirjas:<br>
          POTID JA PANNID."
        `,
        author: '<span class="bold">Jaan Pehk.</span> <span class="italic">"Kohtumine tervisega", 2015</span>',
      },
      {
        title: '<span class="bold">Segamini</span>',
        poem: `
          pangakaart<br>
          läks id-kaardiga<br>
          segi<br><br>
          laula mu laulu<br>
          helisev hääl<br>
          regi
        `,
        author: '<span class="bold">Jaan Pehk.</span> <span class="italic">"Kohtumine tervisega", 2015</span>',
      },
      {
        title: `
          <span class="bold">Kuidas päike<br>
          pilve tagant välja tuli</span>
        `,
        poem: `
          Elas kord mees, kes tundis end pisut<br>
          morjendatud.<br>
          "Ära ole morjendatud," hüüdis väike<br>
          naabritüdruk läbi elupuuheki.<br>
          "Olgu pealegi," ütles mees ja naeratas.<br>
          Päikegi tuli jälle pilve tagant välja. 
        `,
        author: '<span class="bold">Jaan Pehk.</span> <span class="italic">"Kohtumine tervisega", 2015</span>',
      },
      {
        title: '<span class="bold">Naaber</span>',
        poem: `
          Lasteaia naabruses elas mees, kes valdas<br>
          paljusid võõrkeeli.<br>
          "Ты что?" küsisid lapsed üheskoos<br>
          "Ah, ma niisama," vastas mees lahkelt.
        `,
        author: '<span class="bold">Jaan Pehk.</span> <span class="italic">"Kohtumine tervisega", 2015</span>',
      },
      {
        title: "",
        poem: `
          kiirelt kadus<br>
          paradiis, ei jõudnud<br>
          punktigi pan-
        `,
        author: '<span class="bold">Reijo Roos.</span> <span class="italic">Eesti haiku, 2021</span>',
      },
      {
        title: "",
        poem: `
          PERSE ON VÄRAV TEISE DIMENSIOONI<br>
          ja ühtlasi perse
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">"Kaardipakk", 2001</span>',
      },
      {
        title: "",
        poem: `
          MAAILMALÕPUS ON KOHVIK<br>
          Reserveeritud
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">"Kaardipakk", 2001</span>',
      },
      {
        title: "",
        poem: `
          tänasida hambaid<br>
          varmalt heidan<br>
          homse varna
          `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">"Kaardipakk", 2001</span>',
      },
      {
        title: "",
        poem: `
          maamuna peal<br>
          on kui<br>
          maakana all<br><br>
          soe sitane ja lootusetu
        `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">"Kaardipakk", 2001</span>',
      },
      {
        title: "",
        poem: `
          mega<br>
          hüüavad need kes<br>
          doseerivad<br>
          milli ja mikro
        `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">"Kaardipakk", 2001</span>',
      },
      {
        title: "",
        poem: `
          midagi<br>
          on<br>
          väga<br>
          valesti<br><br>
          ja hea ongi
        `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">"Kaardipakk", 2001</span>',
      },
      {
        title: "",
        poem: `
          sõrmed on ristis<br>
          miks ei tea<br>
          jumalat pole ka tutvustatud
        `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">"Kaardipakk", 2001</span>',
      },
      {
        title: "",
        poem: `
          kollase viltpliiatsi ots<br>
          võib olla<br>
          mõne maailma algus<br><br>
          *<br><br>
          kollase viltpliiatsi ots<br>
          on ilmselt siiski<br>
          kollase viltpliiatsi<br>
          algus
        `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">"Kaardipakk", 2001</span>',
      },
      {
        title: "",
        poem: `
          pane vakka see kuradi masin<br>
          ei jõua mõtet lõpuni mõelda<br>
          jookseb kinni<br>
          selgest kiusust
        `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">"Kaardipakk", 2001</span>',
      },
      {
        title: "",
        poem: `
          hollandi mägedest tulin<br>
          ammuli silmi ja sui<br>
          seljakott ripakil
        `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">"Kaardipakk", 2001</span>',
      },
    ],
    en: [
      {
        title: '<span class="bold">The Red Wheelbarrow</span>',
        poem: `
          so much depends<br>
          upon<br>
          a red wheel<br>
          barrow<br>
          glazed with rain<br>
          water<br>
          beside the white<br>
          Chickens.
        `,
        author: '<span class="bold">William Carlos Williams.</span><br><span class="italic">https://www.best-poems.net/william_carlos_williams/the_red_wheelbarrow.html</span>',
      },
      {
        title: '<span class="bold">Blizzard</span>',
        poem: `
          Snow:<br>
          years of anger following<br>
          hours that float idly down —<br>
          the blizzard<br>
          drifts its weight<br>
          deeper and deeper for three days<br>
          or sixty years, eh? Then<br>
          the sun! a clutter of<br>
          yellow and blue flakes —<br>
          Hairy looking trees stand out<br>
          in long alleys<br>
          over a wild solitude.<br>
          The man turns and there —<br>
          his solitary track stretched out<br>
          upon the world.
        `,
        author: '<span class="bold">William Carlos Williams.</span><br><span class="italic">https://www.poetryfoundation.org/poems</span>',
      },
      {
        title: '<span class="bold">Complete Destruction</span>',
        poem: `
          It was an icy day.<br>
          We buried the cat,<br>
          then took her box<br>
          and set fire to it<br>
          in the back yard.<br>
          Those fleas that escaped<br>
          earth and fire<br>
          died by the cold.
        `,
        author: '<span class="bold">William Carlos Williams.</span><br><span class="italic">https://www.poetryfoundation.org/poems</span>',
      },
      {
        title: '<span class="bold">Danse Russe</span>',
        poem: `
          If I when my wife is sleeping<br>
          and the baby and Kathleen<br>
          are sleeping<br>
          and the sun is a flame-white disc<br>
          in silken mists<br>
          above shining trees,—<br>
          if I in my north room<br>
          dance naked, grotesquely<br>
          before my mirror<br>
          waving my shirt round my head<br>
          and singing softly to myself:<br>
          “I am lonely, lonely.<br>
          I was born to be lonely,<br>
          I am best so!”<br>
          If I admire my arms, my face,<br>
          my shoulders, flanks, buttocks<br>
          against the yellow drawn shades,—<br><br>
          Who shall say I am not<br>
          the happy genius of my household?
        `,
        author: '<span class="bold">William Carlos Williams.</span><br><span class="italic">https://www.poetryfoundation.org/poems</span>',
      },
      {
        title: '<span class="bold">Love Song</span>',
        poem: `
          I lie here thinking of you:—<br><br>
          the stain of love<br>
          is upon the world!<br>
          Yellow, yellow, yellow<br>
          it eats into the leaves,<br>
          smears with saffron<br>
          the horned branches that lean<br>
          heavily<br>
          against a smooth purple sky!<br>
          There is no light<br>
          only a honey-thick stain<br>
          that drips from leaf to leaf<br>
          and limb to limb<br>
          spoiling the colors<br>
          of the whole world—<br><br>
          you far off there under<br>
          the wine-red selvage of the west!
        `,
        author: '<span class="bold">William Carlos Williams.</span><br><span class="italic">https://www.poetryfoundation.org/poems</span>',
      },
      {
        title: '<span class="bold">Muier</span>',
        poem: `
          Oh, black Persian cat!<br>
          Was not your life<br>
          already cursed with offspring?<br>
          We took you for rest to that old<br>
          Yankee farm, — so lonely<br>
          and with so many field mice<br>
          in the long grass —<br>
          and you return to us<br>
          in this condition —!<br><br>
          Oh, black Persian cat.
        `,
        author: '<span class="bold">William Carlos Williams.</span><br><span class="italic">https://www.poetryfoundation.org/poems</span>',
      },
      {
        title: '<span class="bold">Sonnet in Search of an Author</span>',
        poem: `
          Nude bodies like peeled logs<br>
          sometimes give off a sweetest<br>
          odor, man and woman<br><br>
          under the trees in full excess<br>
          matching the cushion of<br><br>
          aromatic pine-drift fallen<br>
          threaded with trailing woodbine<br>
          a sonnet might be made of it<br><br>
          Might be made of it! odor of excess<br>
          odor of pine needles, odor of<br>
          peeled logs, odor of no odor<br>
          other than trailing woodbine that<br><br>
          has no odor, odor of a nude woman<br>
          sometimes, odor of a man
        `,
        author: '<span class="bold">William Carlos Williams.</span><br><span class="italic">https://www.poetryfoundation.org/poems</span>',
      },
      {
        title: '<span class="bold">Occupation</span>',
        poem: `
          The soldiers<br>
          are hard at work<br>
          building a house.<br>
          They hammer<br>
          bodies into the earth<br>
          like nails,<br>
          they paint the walls<br>
          with blood.<br>
          Inside the doors<br>
          stay shut, locked<br>
          as eyes of stone.<br>
          Inside the stairs<br>
          feel slippery,<br>
          all flights go down.<br>
          There is no floor:<br>
          only a roof,<br>
          where ash is falling –<br>
          dark snow,<br>
          human snow,<br>
          thickly, mutely<br>
          falling.<br>
          Come, they say.<br>
          This house will<br>
          last forever.<br>
          You must occupy it.<br>
          And you, and you –<br>
          And you, and you –<br>
          Come, they say.<br>
          There is room<br>
          for everyone.
        `,
        author: '<span class="bold">Suji Kwock Kim.</span><br><span class="italic">https://www.poetryfoundation.org/poetrymagazine/browse?contentId=38994</span>',
      },
      {
        title: '<span class="bold">Believe, Believe</span>',
        poem: `
          Believe in this. Young apple seeds,<br>
          In blue skies, radiating young breast,<br>
          Not in blue-suited insects,<br>
          Infesting society’s garments.<br><br>
          Believe in the swinging sounds of jazz,<br>
          Tearing the night into intricate shreds,<br>
          Putting it back together again,<br>
          In cool logical patterns,<br>
          Not in the sick controllers,<br>
          Who created only the Bomb.<br><br>
          Let the voices of dead poets<br>
          Ring louder in your ears<br>
          Than the screechings mouthed<br>
          In mildewed editorials.<br>
          Listen to the music of centuries,<br>
          Rising above the mushroom time.
        `,
        author: '<span class="bold">Bob Kaufman</span><br><span class="italic">https://www.poetryfoundation.org/poems/55714/believe-believe</span>',
      },
      {
        title: '',
        poem: `
          One flower<br>
          On the cliffside<br>
          Nodding at the canyon
        `,
        author: '<span class="bold">Jack Kerouac</span><br><span class="italic">https://livinghaikuanthology.com</span>',
      },
      {
        title: '',
        poem: `
          Birds singing<br>
          In the dark<br>
          Rainy dawn
        `,
        author: '<span class="bold">Jack Kerouac</span><br><span class="italic">https://livinghaikuanthology.com</span>',
      },
      {
        title: '',
        poem: `
          Nightfall,<br>
          boy smashing dandelions<br>
          with a stick.
        `,
        author: '<span class="bold">Jack Kerouac</span><br><span class="italic">https://livinghaikuanthology.com</span>',
      },
      {
        title: '',
        poem: `
          Morning sun -<br>
          The purple petals,<br>
          Four have fallen
        `,
        author: '<span class="bold">Jack Kerouac</span><br><span class="italic">https://livinghaikuanthology.com</span>',
      },
      {
        title: '',
        poem: `
          You’d be surprised<br>
          how little I knew<br>
          Even up to yesterday
        `,
        author: '<span class="bold">Jack Kerouac</span><br><span class="italic">https://livinghaikuanthology.com</span>',
      },
      {
        title: '',
        poem: `
          Nightfall,<br>
          too dark to read the page<br>
          too cold.
        `,
        author: '<span class="bold">Jack Kerouac</span><br><span class="italic">https://livinghaikuanthology.com</span>',
      },
      {
        title: '',
        poem: `
          Following each other<br>
          my cats stop<br>
          when it thunders.
        `,
        author: '<span class="bold">Jack Kerouac</span><br><span class="italic">https://livinghaikuanthology.com</span>',
      },
      {
        title: '',
        poem: `
          Alone, in old<br>
          clothes, sipping wine<br>
          Beneath the moon
        `,
        author: '<span class="bold">Jack Kerouac</span><br><span class="italic">https://livinghaikuanthology.com</span>',
      },
      {
        title: '',
        poem: `
          Looking for my cat<br>
          In the weeds,<br>
          I found a butterfly
        `,
        author: '<span class="bold">Jack Kerouac</span><br><span class="italic">https://livinghaikuanthology.com</span>',
      },
      {
        title: '',
        poem: `
          April mist –<br>
          Under the pine<br>
          At midnight
        `,
        author: '<span class="bold">Jack Kerouac</span><br><span class="italic">https://livinghaikuanthology.com</span>',
      },
      {
        title: '<span class="bold">8 count</span>',
        poem: `
          from my bed<br>
          I watch<br>
          3 birds<br>
          on a telephone<br>
          wire.<br><br>
          one flies<br>
          off.<br>
          then <br>
          another.<br><br>
          one is left,<br>
          then<br>
          it too<br>
          is gone.<br><br>
          my typewriter is<br>
          tombstone<br>
          still.<br><br>
          and I am<br>
          reduced to bird<br>
          watching.<br><br>
          just thought I'd<br>
          let you<br>
          know,<br>
          fucke<span class="italic">r</span>.
        `,
        author: '<span class="bold">Charles Bukowski</span><br><span class="italic">https://www.poetryfoundation.org/poems/49699/8-count</span>',
      },
      {
        title: '<span class="bold">Color as Beginning</span>',
        poem: `
          Forget love<br>
          I want to die<br>
          in your yellow hair
        `,
        author: '<span class="bold">Richard Brautigan.</span> <span class="italic">https://allpoetry.com/Color-As-Beginning</span>',
      },
      {
        title: '<span class="bold">Please</span>',
        poem: `
          Do you think of me<br>
          as often<br>
          as I think<br>
          of you?
        `,
        author: '<span class="bold">Richard Brautigan.</span> <span class="italic">https://allpoetry.com/poem/8508963-Please-by-Richard-Brautigan</span>',
      },
      {
        title: '<span class="bold">15%</span>',
        poem: `
          she tries to get things out of men<br>
          that she can't get because she's not<br>
          15% prettier
        `,
        author: '<span class="bold">Richard Brautigan.</span> <span class="italic">https://allpoetry.com/poem/8508937-15--by-Richard-Brautigan</span>',
      },
      {
        title: '<span class="bold">Just Because</span>',
        poem: `
          Just because<br>
          people love your mind,<br>
          doesn't mean they<br>
          have to have<br>
          your body,<br>
          too.
        `,
        author: '<span class="bold">Richard Brautigan.</span> <span class="italic">https://allpoetry.com/Just-Because</span>',
      },
      {
        title: '<span class="bold">Love Poem</span>',
        poem: `
          It's so nice<br>
          to wake up in the morning<br>
          all alone<br>
          and not have to tell somebody<br>
          you love them<br>
          when you don't love them<br>
          any more.
        `,
        author: '<span class="bold">Richard Brautigan</span><br><span class="italic">https://allpoetry.com/poem/8508977-Love-Poem-by-Richard-Brautigan</span>',
      },
      {
        title: '<span class="bold">Cycle Accident</span>',
        poem: `
          A lovely day for Bill to drive to work<br>
          Simply not the kind of day an accident could happen<br>
          Help… Help… I’ve cut meself and can’t stop the blood<br>
          I’m sorry, I’ll have a help<br>
          I’ll get help<br>
          No… No.. No Don’t go<br>
          Whoo whooh… choo choo<br>
          That man could have cut an artery and bled to death before Bill could get help<br>
          Don’t you be like Bill<br>
          Join the St. John Ambulance Reserve
        `,
        author: '<span class="bold">John Cooper Clarke</span><br><span class="italic">https://johncooperclarke.com</span>',
      },
      {
        title: '<span class="bold">Haiku</span>',
        poem: `
          To-con-vey one’s mood<br>
          In sev-en-teen syll-able-s<br>
          Is ve-ry dif-fic<br>
        `,
        author: '<span class="bold">John Cooper Clarke</span><br><span class="italic">https://johncooperclarke.com</span>',
      },
      {
        title: '<span class="bold">Action Man</span>',
        poem: `
          Give him scars and khaki to wear<br>
          Remove his balls, he’ll go anywhere<br>
          He doesn’t speak, he doesn’t dare<br>
          Death sneaks, he isn’t scared<br>
          Minus balls, he doesn’t care<br>
          Jacks beware, action man.<br>
          He can ack-ack Ackrington, bomb Berlin<br>
          Reduce your car to a heap of tin<br>
          Wage war, what’s more – win<br>
          Punctured skin means nothing to him<br>
          The human grenade minus pin<br>
          That’s him, action man<br>
          A chin with a thin Kirk Douglas cleft<br>
          Squad by the bleeding left<br>
          Don’t shout he’s deaf<br>
          Head over heels in love with death<br>
          Beware of the wrath of the man bereft<br>
          No marriage plans for action man
        `,
        author: '<span class="bold">John Cooper Clarke</span><br><span class="italic">https://johncooperclarke.com</span>',
      },
      {
        title: '<span class="bold">Sperm Test</span>',
        poem: `
          More on the sick<br>
          Down in the dumps<br>
          I went to the clinic<br>
          What about these lumps<br>
          Do you wear tight knickers<br>
          Have you ever had the mumps<br>
          Can’t give it a rest<br>
          Break out the Lucozade<br>
          Make it the best<br>
          I’m engaged to my<br>
          Sperm test<br>
          The clinical arrangement<br>
          No phony bon-amie<br>
          Gleaming apparatus<br>
          Complete autonomy<br>
          Cynical estrangements don’t bother me<br>
          Germ breed, negative mess<br>
          The rubber gloves called cold caress<br>
          Tells me i’m in love with my<br>
          Sperm test
        `,
        author: '<span class="bold">John Cooper Clarke</span><br><span class="italic">https://johncooperclarke.com</span>',
      },
      {
        title: '<span class="bold">Anticipated Stranger</span>',
        poem: `
          the bruise will stop by later.<br>
          For now, the pain pauses in its round,<br>
          notes the time of day, the patient’s temperature,<br>
          leaves a memo for the surrogate: What the hell<br>
          did you think you were doing? I mean . . .<br>
          Oh well, less said the better, they all say.<br>
          I’ll post this at the desk.<br><br>
          God will find the pattern and break it.
        `,
        author: '<span class="bold">John Ashbery</span><br><span class="italic">https://www.poetryfoundation.org/poems/53385/anticipated-stranger</span>',
      },
    ],
    ru: [
      {
        title: '<span class="bold">сам себе</span>',
        poem: `
          я сбрил бородку и усы<br>
          я сам себе теперь как сын<br>
          постригся налысо и вдруг<br>
          стал сам себе почти как внук<br>
          я сам себя повёл во двор<br>
          и не вернулся до сих пор
        `,
        author: '<span class="bold">Александр Пелевин.</span> <span class="italic">“Верная Тундра”, 2015</span>',
      },
      {
        title: '<span class="bold">Поутру</span>',
        poem: `
          А поутру а поутру<br>
          Я полутруп я полутруп<br>
          А почему а потому<br>
          Что ночью снилась мне Муму<br>
          И в полудрёме в полусне<br>
          Я с нею был на самом дне<br>
          Мычал Герасим с вышины<br>
          Как все Герасимы страны
        `,
        author: '<span class="bold">Александр Пелевин.</span>',
      },
      {
        title: '<span class="bold">Пикник</span>',
        poem: `
          Дети пили газировку<br>
          Дяди водку и зубровку<br>
          Тёти сладкое вино<br>
          Всех тошнило всё равно
        `,
        author: '<span class="bold">Александр Пелевин.</span> <span class="italic">https://45parallel.net/aleksandr_pelevin/stihi/#piknik</span>',
      },
      {
        title: '<span class="bold">Я верю...</span>',
        poem: `
          Мне нравится это солнце<br>
          Что будет сиять до зари<br>
          Я знаю, что все вернется<br>
          На этот конец земли.<br><br>
          Я знаю, что за дождями<br>
          Есть свет и тепло огня,<br>
          Что между двумя сердцами<br>
          Есть ниточка - их душа.<br><br>
          Я верю, что есть на свете<br>
          Тот берег, тот край земли,<br>
          Где солнце теплее светит<br>
          И ярче, и до зари.
        `,
        author: '<span class="bold">Вера Морозова.</span><br><span class="italic">&copy; Copyright: Вера Морозова, 2006</span>',
      },
      {
        title: '<span class="bold">Непогасшая звезда</span>',
        poem: `
          Всегда бегу неведомо куда,<br>
          Всегда лечу за незнакомый берег,<br>
          Но только непогасшая звезда<br>
          Горит, и только ей всегда я верю.<br><br>
          Она - одна из маленьких планет,<br>
          И солнышко моё, что согревает,<br>
          Она, моя звезда, мне дарит свет<br>
          Она горит, горит - не угасает.<br><br>
          Я знаю, что нет вечного огня,<br>
          Но буду верить, верила и прежде,<br>
          И будет вечно в сердце у меня<br>
          Светить моя звезда - моя надежда. 
        `,
        author: '<span class="bold">Вера Морозова.</span><br><span class="italic">&copy; Copyright: Вера Морозова, 2006</span>',
      },
      {
        title: '<span class="bold">Сколько недописанных стихов…</span>',
        poem: `
        Сколько недописанных стихов<br>
        В ящике стола давно пылится…<br>
        Сколько мыслей, чувств, ненужных слов<br>
        Под замком души моей таится…<br><br>
        Вырваться наружу не спешат<br>
        Видно им и там пока не плохо...<br>
        И стучат, стучат, стучат, стучат,<br>
        Колят сердце с каждым новым вздохом.
        `,
        author: '<span class="bold">Вера Морозова.</span><br><span class="italic">&copy; Copyright: Вера Морозова, 2008</span>',
      },
      {
        title: '<span class="bold">Небесная мечта</span>',
        poem: `
          Уще не суждено осуществиться,<br>
          Мечте, той, что давно в душе таится.<br>
          Так и нельзя поймать за хвост жар-птицу,<br>
          Так сердце будет бесконечно биться.<br><br>
          Надежда, что живёт за облаками,<br>
          Надежда, та что в сердце вечно с нами<br>
          С мечтою, что парит под небесами,<br>
          Уносится нездешними волнами.<br><br>
          Быть может, где-то в выси, в поднебесье,<br>
          Звучит о счастье сказочная песня,<br>
          Но только в мире этом очень тесно<br>
          Для тех сердец, что вечно будут вместе.
        `,
        author: '<span class="bold">Вера Морозова.</span><br><span class="italic">&copy; Copyright: Вера Морозова, 2006</span>',
      },
      {
        title: '<span class="bold">Повод</span>',
        poem: `
          Холодно. Сырость. Серость. Уставший город<br>
          Скован морозом и пробками на дорогах,<br>
          Каждый теперь отчаянно ищет повод,<br>
          Чтоб задержаться немножечко у порога,<br><br>
          Может быть даже вернуться и выпить чаю,<br>
          И убаюкать уставший за утро разум,<br>
          И просидеть так долго, не замечая,<br>
          Что опоздал на все самолёты сразу.<br><br>
          Вспомнить все строчки любимых стихотворений,<br>
          И хотя бы чуть-чуть во сне и мечтах погреться -<br>
          Хочется очень мороженного из сирени,<br>
          Такого весеннего, словно оно из детства.
        `,
        author: '<span class="bold">Вера Морозова.</span><br><span class="italic">&copy; Copyright: Вера Морозова, 2012</span>',
      },
      {
        title: '<span class="bold">Бродяга-дождь</span>',
        poem: `
          АмDm<br>
          Ты как всегда идёшь по свету,<br>
          Е Am<br>
          Жду тебя не зная где ты,<br>
          AmDmG C<br>
          И ты меня наверно тоже очень ждёшь<br>
          Сколько бы ни было невезений<br>
          Только их далёкой тенью<br>
          Унесёт с собой бродяга глупый дождь.<br><br>
          Припев<br>
          E AmE Am<br>
          Дождь-бродяга-забияка,<br>
          AmDmG C<br>
          Что же ты весь день проплакал?<br>
          …
        `,
        author: '<span class="bold">Вера Морозова.</span><br><span class="italic">&copy; Copyright: Вера Морозова, 2009</span>',
      },
      {
        title: '<span class="bold">А вы могли бы?</span>',
        poem: `
          Я сразу смазал карту будня,<br>
          плеснувши краску из стакана;<br>
          я показал на блюде студня<br>
          косые скулы океана.<br>
          На чешуе жестяной рыбы<br>
          прочел я зовы новых губ.<br>
          А вы<br>
          ноктюрн сыграть<br>
          могли бы<br>
          на флейте водосточных труб?
        `,
        author: '<span class="bold">Владимир Маяковский.</span><br><span class="italic">"Художественная Литература", 1967</span>',
      },
      {
        title: '<span class="bold">Гейнеобразное</span>',
        poem: `
          Молнию метнула глазами:
          "Я видела -<br>
          с тобой другая.<br>
          Ты самый низкий,<br>
          ты подлый самый..." -<br>
          И пошла,<br>
          и пошла,<br>
          и пошла, ругая.<br>
          Я ученый малый, милая,<br>
          громыханья оставьте ваши,<br>
          Если молния меня не убила -<br>
          то гром мне,<br>
          ей-богу, не страшен.
        `,
        author: '<span class="bold">Владимир Маяковский.</span><br><span class="italic">Художественная литература, 1988</span>',
      },
      {
        title: '<span class="bold">Мне бы...</span>',
        poem: `
          Дорогу найдёт идущий,<br>
          получит живот худющий,<br>
          ползущий увидит небо,<br>
          а мне бы тебя бы мне бы.<br><br>
          Поштучно идёт неделя,<br>
          пощучно живёт Емеля,<br>
          покучно в столовке хлеб,<br>
          а мне бы тебя бы мне б.<br><br>
          Белеет на синем парус,<br>
          болеет Россини, старясь,<br>
          моря растворяют льды.<br>
          Моя не хватает ты
        `,
        author: '<span class="bold">Сергей Завьялов.</span><br><span class="italic">&copy; https://ryfma.com/p/xPDL6vzuf7fMsuXLw/mne-by</span>',
      },
    ],
  },
  4: { // High risk (Machine poetry)
    et: [
      {
        title: "",
        poem: `
          old man!<br><br>
          What a fresh face!<br>
          He seems to be in a fever.<br>
          He wants to wash his face<br>
          with cold water,<br>
          but the girls wouldn't let him.<br><br>
          Is it Frank?<br>
          Tell me, what is it
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I have something to tell you.<br><br>
          What is it?<br><br>
          I have something to tell you<br>
          that is very important,<br>
          very important.<br>
          There is an old woman in a little<br>
          village on the Danube –<br>
          What is she saying?<br><br>
          my little friend.<br>
          I've been neglecting you.<br><br>
          He ought to come in every day,<br>
          he's got to be in the house.<br>
          .<br>
          .<br><br>
          What an idea!<br>
          We ought to have a shilling in the bank.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Lucy.<br>
          You, you and mommy and daddy.<br><br>
          I am as cold as an iceberg.<br>
          Yasha, have the wine.<br><br>
          Dear friend,<br>
          I am content to be a nobody.<br>
          I have purchased a plot of land
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          “To you too," she said.<br>
          "Let me go."<br><br>
          "Yes," I said, clasping her close.<br><br>
          "How beautiful you are today!"<br><br>
          It's not beautiful, it's just filthy,<br>
          don't you know
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          You're late!<br><br>
          I'm not late.<br>
          It's eight o'clock already.<br><br>
          Then I suppose it's eight already.<br><br>
          Yes, it seems so.<br>
          Is it?<br><br>
          It's eight.<br>
          Ah, well
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'll try to make you happy, but--<br><br>
          That's enough, with your wife.<br>
          I'll call off the trial on Thursday.<br><br>
          You're a fool to say such things,<br>
          but--no.<br>
          You don't understand.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Stop that, please!<br><br>
          Enough, enough!<br>
          We're not playing,<br>
          it's time we got started!<br>
          Or is it...<br>
          is it...<br>
          ?<br><br>
          Let's go to the shop first.<br><br>
          Ah, here they
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Let's go over to the boat.<br>
          May I?<br><br>
          Yes, go.<br><br>
          It's quite cold in here,<br>
          it's quite cold.<br><br>
          It ought to be very cold.<br>
          Let's sit inside.<br>
          Here,
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Undine, are you here?<br><br>
          Yes, actually I was just going to go in,<br>
          but...<br>
          There...<br>
          there...<br><br>
          What are you doing, Platonov?<br><br>
          I should like to tell you myself, if
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          What time is it?<br><br>
          Five minutes.<br><br>
          Two minutes.<br>
          You are quite exhausted.<br><br>
          I am.<br><br>
          You have worked so hard today.<br>
          You have tasted so much good food.<br>
          Please, let us drink some cold
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
        This is embarrassing…<br><br>
        Guilt, too, my friends!<br>
        We have not been so filthy<br>
        since the war.<br><br>
        We all miss the war, and a man may be forgiven<br>
        for thinking he has lived without the past,<br>
        but let
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          uncle!<br><br>
          What's the matter?<br><br>
          I--I'm so embarrassed.<br>
          Uncle, uncle,<br>
          what's the matter with you?<br>
          Why are you so cold?<br>
          I've kept my lips shut for so long,<br>
          I've wanted to
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          My name is Vinogradov,<br>
          and I am a Civil Engineer.<br>
          I am sorry to have to come to you,<br>
          Margit.<br><br>
          Oh, I am so glad you did.<br>
          Tell them to come in at once.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I know it must seem strange, but...<br>
          forgive me for saying so… I have <br>
          committed a heinous sin,<br>
          and must live with this shame forever.<br>
          I am a failure…<br><br>
          And I have killed many a good man…<br><br>
          Really
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          So what?<br>
          Do you want to know?<br>
          I did not do it.<br><br>
          I've told you everything,<br>
          I'm tired of you.<br>
          Oh, Catherine, Catherine,<br>
          what is she thinking of now?<br><br>
          Tell me,
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          can I help you?<br>
          I've lost all my money.<br><br>
          How's the horse?<br>
          Is he all right?<br><br>
          Yes, he's all right.<br><br>
          What happened to the others?<br>
          Where did they all go?
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Please.<br>
          All of you...please...<br><br>
          I...<br>
          Where am I?<br>
          Where am I?<br>
          Jerusalem...it's in the air!<br><br>
          I can't.<br>
          I feel as if my soul is floating
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          can I borrow your coat?<br><br>
          No,<br>
          I shan't let you put it on till supper.<br><br>
          Oh, oh, oh!<br>
          How cruel you are!<br><br>
          Stop it!<br>
          You're getting on my nerves!
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm home.<br>
          I had a short holiday.<br>
          ..."<br><br>
          "A short holiday?"<br><br>
          "Well, look at him now: a cripple, with<br>
          bad feet, walking and talking,<br>
          and a tray of porridge for lunch!"
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          evil ones, you should keep your<br>
          distance from each other,<br>
          for our present state of things<br>
          have become intolerable.<br>
          I am becoming quite ill at<br>
          the thought of it all.<br><br>
          What nonsense is this, nonsense!<br>
          What noble tradition is this, what
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          all!<br><br>
          Yes,<br>
          we have the river flowing<br>
          right through here!<br><br>
          My dear, precious treasure, good-bye!<br><br>
          What are you reading now?<br><br>
          The best of Russian literature,<br>
          a wonderful author,<br>
          a Russian of
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          to you, sweetheart." I've had a rough time lately, and theoretically<br>
          I could be released from my vow of silence, and finally forgiven,<br>
          and allowed to live a normal life.<br>
          But what should I do?<br>
          What, for instance
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Come, let's go into the forest!<br>
          We haven't had any quiet since morning.<br><br>
          You said you'd be back in an hour.<br>
          Have I the right to tell you so?<br><br>
          You do?<br>
          Oh, you're awfully
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm going to spend the night here!<br><br>
          Yes, yes, spend the night here.<br>
          It's a fine place to live,<br>
          and the servants are all<br>
          in the best of health.<br>
          But your health is so bad!
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          makes my stomach turn.<br><br>
          He fell on hard times.<br>
          We are not here to condemn him,<br>
          but we are happy that in his<br>
          case we have been heard.<br>
          When a man defaults he always retires into<br>
          himself; he cannot touch the ground
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Yang!<br><br>
          To hell with her!<br>
          Oh, my sweet child!<br><br>
          Are you well?<br><br>
          I'm just fine, thank you.<br><br>
          You'd better rest, Nicholas.<br>
          He's got cold.<br><br>
          Yes
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          you, I've got to go!<br><br>
          Don't go,<br>
          we'll find a seat for<br>
          you somewhere else.<br><br>
          Thank you.<br><br>
          I've forgotten.<br>
          Shall I leave now?<br><br>
          No, why not?<br><br>
          What
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Hiroto-san!<br><br>
          Where have you been?<br>
          Who is there after us?<br><br>
          I do not know.<br>
          I am so bored!<br>
          I spend all my time and attention in thinking<br>
          up ways to get Buffon to come
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          brother!<br><br>
          What is it, Papa?<br><br>
          I was pondering it, and came to the conclusion that we should<br>
          all be slaves if it weren't for my beloved pet parrot,<br>
          Whiskers.<br><br>
          What a wonderful
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          everybody!<br>
          How's it going?<br>
          Dad's back with milk and jam,<br>
          how's your health?<br><br>
          Fine.<br><br>
          What's the matter with you, darling?<br><br>
          My soul is delighted and full of life.<br>
          My soul
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Fang Yezi!<br><br>
          The grocery store…?<br>
          It's closed!<br><br>
          It's broken into!<br>
          We can't come in!<br><br>
          We've got to go to the grocery store!<br><br>
          Gone to the grocery store
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          No.<br><br>
          Aunty, can I have some jam with you?<br><br>
          Not for that.<br><br>
          What is it?<br><br>
          The doctor has pushed his<br>
          box over to the right,<br>
          and it is now getting light
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          What is it?<br>
          Is it Marian's birthday present time?<br><br>
          A present for her.<br>
          It's a little red velvet trunk<br>
          with a red rose on it.<br><br>
          What's that?<br><br>
          A present for her.<br>
          Her illness
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          let me kiss them softly!<br>
          ...What is the matter with you?<br>
          -What d'you say?<br>
          -Yes,<br>
          I am always angry with myself and always<br>
          feel that I am not quite myself.<br>
          I am incredibly unhappy.<br>
          Why is this?
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          love, I'm going away now, oh my God<br><br>
          You're going away now, soon.<br><br>
          When will it be, long day, or short one,<br>
          dear?<br><br>
          Short one, dear.<br>
          You never know.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I sure do loved you !<br>
          you've changed so much in two years that<br>
          I can't put myself in your place.<br>
          I left school at fifteen, and since<br>
          then I've thrown myself into work,<br>
          and have worked eighteen<br>
          hours a day — eighteen
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm so happy to have found you<br>
          everywhere in the town!<br><br>
          How lovely you are!<br>
          How beautiful!<br>
          You're so kind!<br>
          Thank you for everything,<br>
          for everything!<br>
          Forgive me,<br>
          I forget my manners--thank you for
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          my dearest...<br>
          I shall be damned if I let you down.<br>
          Forgive me, forgive me...<br>
          forgive me...<br>
          forgive me!<br><br>
          Don't, Angela,<br>
          I don't want to hear any more!<br><br>
          What is it,
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          To my home I come from!<br>
          Hello, Katerina Ponomareva!<br><br>
          "I shall go on foot to the river." That is what the women<br>
          of Kirov want: a man of honour, some responsibility,<br>
          a
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          That's only half the story!<br>
          You came to town on business,<br>
          but I didn't.<br>
          Whoever you are, you are irritating!<br><br>
          One of the sisters of<br>
          the First Consulate--<br><br>
          Certainly.<br><br>
          I
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm late.<br><br>
          I'm afraid we ran off the rope<br>
          while dressing just now.<br><br>
          What rope?<br><br>
          That twine that's tied to the tree.<br><br>
          I was telling Martha about that<br>
          old log that felled some
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          little lamia,<br>
          why are you so moody this evening?<br>
          why do you cry so?<br>
          it could just be the weather...<br><br>
          ...What are you crying for?<br>
          for wha t?<br><br>
          for wha t?<br>
          nya
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Take your luggage off...<br><br>
          No, I want to stay!<br>
          Where is my cigar?<br><br>
          Here it is in the palm of my hand.<br>
          I smoke it every day.<br>
          It is pleasant to smoke.<br><br>
          What is
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          from home.<br>
          .<br>
          .<br>
          .<br>
          My wife is just the same.<br><br>
          She is coming?<br>
          Is that you, Natasha?<br><br>
          Yes, darling.<br>
          Let me tell you how I feel, how I am!<br>
          A cold sweat goes down my spine
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          What time is it?<br><br>
          An hour ago.<br><br>
          An hour ago!<br>
          And now it is nearly dawn.<br>
          Who knows what the weather<br>
          will be like tomorrow.<br>
          We must go.<br><br>
          What delightful views!<br>
          In the evening light the
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Please offer me something to drink,<br>
          Father.<br>
          I'm freezing...<br>
          Father...<br>
          I'm cold...<br>
          I'm cold...<br>
          let me stay here here...<br><br>
          Excuse me, Miss Masha, but I'm freezing,<br>
          too...
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Saul.<br><br>
          There's an owl!<br>
          Eh?<br>
          What a coincidence!<br><br>
          What a coincidence, too!<br>
          It wasn't my doing.<br>
          Is that you, Peter?<br><br>
          It is I!<br>
          I've taken off my coat!<br>
          Aren
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          It's about time!<br>
          My, my, we all have short temperes.<br>
          Are you asleep, Katie?<br><br>
          Yes, sir.<br><br>
          Your eyes look as if you were asleep.<br><br>
          Yes, sir.<br><br>
          You
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          and good morning…and to-morrow morning,<br>
          righteously…<br><br>
          You<<br><br>
          Surely you shouldn't say<br>
          anything like that!<br>
          You<<br><br>
          I'll be quiet, Misha.<br><br>
          I didn't find the body
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Do you know where you are?<br><br>
          Where?<br>
          Where?!<br><br>
          In the peasant's hole!<br>
          Ah,<br>
          where would we be without each other!<br>
          Come, my darling, come!<br>
          Let me hold you!<br><br>
          My arms are
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Birobidz-vanadu, do come!<br>
          It is time!<br>
          Come, humbug!<br>
          ...Oh, I don't see the real me any more.<br>
          They have been feeding me ever<br>
          since I have come here,<br>
          and as
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          is Mr.<br>
          Paltchnik."<br><br>
          "Yes."<br><br>
          "I am so happy to see you!"<br><br>
          "Very happy indeed," I answered,<br>
          "and so sad, too,<br>
          to see you go now.<br>
          Please don't
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          does this mean...<br><br>
          To every cat that walks on two legs there<br>
          is one there who needs to be fed.<br>
          He is exhausted from his long journey.<br><br>
          Then you are tired already,<br>
          Ivan Romanovitch.<br><br>
          I don
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          ma, you're so tired today!" ...<br>
          A woman with a sunflower in her hand cries<br>
          out to a shop-girl for directions.<br>
          "Go and tell the shop-girl<br>
          to go for Sympathy!"<br><br>
          One can understand her
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          did you hear?<br>
          That man is a Russian.<br><br>
          What's the matter with me?<br>
          My head's about to explode.<br>
          Those red eyes....<br>
          Man, when I reach thirty...<br>
          I'll marry a rich man,<br>
          you understand....
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          is this the office on which you work?<br>
          No; I went to dinner at my sister's.<br><br>
          To-morrow we'll go away.<br><br>
          Good-bye.<br>
          I've no anxiety about you;<br>
          you're a free man
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Max.<br><br>
          Do you remember how we used to play this terrible<br>
          flute-partie when we used to live here?<br><br>
          I don't!<br>
          I don't!<br><br>
          Oh, poor girl, oh, wretch!
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I am here; thank you!<br><br>
          Vanya, my dear,<br>
          you have done me justice; I have never in my life heard<br>
          such an exclamation befitting your character!<br><br>
          You are still a virgin, doctor.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          little mortal.<br>
          Good-bye.<br><br>
          The engineer brought me<br>
          a package from Moscow!<br>
          What a coincidence!<br><br>
          A package?<br>
          From Moscow?<br>
          How strange!<br>
          Red in the middle!<br><br>
          It's a present for you, little
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          is Olga.<br>
          I am very happy to see you!<br><br>
          What do you mean by this happiness?<br><br>
          Your mother says that you have been<br>
          lying ill ever since you came here,<br>
          and that you have even<br>
          been afraid to go to
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          to the Peruvians,<br><br>
          I'm in love,<br>
          I've been in love for fifty years now!<br><br>
          For fifty years!<br>
          And why?<br>
          Because you people live like animals, never<br>
          content with the earth you inhabit,<br>
          you work without
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Now that they've found me,<br>
          how can I get them to<br>
          give me back my coat?<br>
          I can go on my way,<br>
          but they can't take me away.<br>
          They won't understand me.<br><br>
          You're too kind...<br>
          Please,
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          You must come to a decision<br>
          about this myself,<br>
          or else I shall dismiss you.<br><br>
          Well?<br>
          And what about it?<br><br>
          And this and the following, please.<br><br>
          Agreed?<br>
          The rent hasn't gone
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          The noise was terrible."<br><br>
          Yes, they had gone away early to-day,<br>
          and we hardly knew each<br>
          other from the other!<br>
          I shed a tear or two, too.<br>
          I know not when we shall meet again.<br><br>
          "
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          the doctor!<br>
          He was going to come in, he<br>
          said he wanted to see me,<br>
          he wanted to speak to me.<br>
          My name is—I don't know what you want,<br>
          really—Marshall!<br><br>
          Oh, my name is
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I sure am full of pleasure<br>
          when I am on my feet!<br><br>
          It's summer now,<br>
          but I'm afraid the temperature<br>
          will drop further...<br>
          It's summer now,<br>
          but I'm afraid the temperature<br>
          will drop further...<br>
          It's summer
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          What are you doing here?<br><br>
          A stroll in the fields.<br><br>
          I know you're not.<br>
          Why are you running about here?<br><br>
          I feel like going swimming.<br><br>
          It's nothing.<br>
          Don't feel guilty
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          It's all right.<br>
          Back in the hotel room, with<br>
          the fire, the cold,<br>
          and the noise....<br>
          But the piano doesn't seem to mind.<br><br>
          What did the Baron do?<br><br>
          He stood on Napoleon's grave in
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          He's asleep.<br><br>
          I don't know what he's doing,<br>
          he's been asleep a long time……<br><br>
          Shall I get him some tea,<br>
          he'll be very tired.<br><br>
          He's really a silly fellow
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          to you too, t'other day!<br>
          <Shakes head.<br><br>
          Where?<br><br>
          Here, listen here,<br>
          I've been sleeping all night in the library because my brother<br>
          Sebastien and I couldn't get into the court garden; we
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          God, what a frightful noise it made!<br>
          <exits,<br>
          turns to see what the matter<br>
          is while > What is it?<br><br>
          What is it?<br><br>
          Just turn and look at me, Nicolas.<br><br>
          The devil forbid
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I don't know what to do!<br>
          I don't know whom to talk to!<br><br>
          She treated me with great dignity!<br><br>
          Why do you come to me?<br><br>
          I have been wanting to<br>
          talk to you all night.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          the best of luck on your voyage<br><br>
          To think that I am only<br>
          forty-seven years old!<br>
          I have been with you from the<br>
          first day I laid eyes on you.<br>
          I have carried your clothes<br>
          and your luggage.<br>
          We have loved and hated
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Yes, sir.<br><br>
          My name is Sergei,<br>
          I am a lieutenant in the 105th<br>
          Mechanized Rifle Battalion.<br>
          I am on leave and not yet<br>
          entitled to pension,<br>
          but I ask you to forgive my silence.<br>
          I thank you
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm not going to school today.<br><br>
          It's dreadful, you know, it's dreadful.<br>
          He blinked.<br><br>
          Who's there?<br><br>
          It's my wife.<br><br>
          Don't laugh, I laughed before.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm going to leave our<br>
          apartment to-morrow.<br>
          I have a lot of things to take care of,<br>
          you can imagine.<br>
          I've finished the picture that Lydia promised to make<br>
          for me and now I have to look after her archives.<br>
          I
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          this is Jiri, she's the receptionist"<br><br>
          It's you, it's me.<br>
          What are you looking at?<br><br>
          It's Athanasius, he's coming.<br>
          I've got to go now, I can't
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Oh, then it's done.<br><br>
          Thanks to you I don't feel<br>
          like kissing you anymore.<br><br>
          You're my husband, my hero, I love<br>
          you, all of you, my whole being,<br>
          is devoted to you.<br>
          I
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          asking for helpurgentlyto repair the damage<br>
          done to our estate yesterday evening William .<br><br>
          Oh, how I long to go to Tvverka!<br>
          I am at last going to visit the dear<br>
          old house in the forest with my
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Auntie Masha!<br>
          How are you, Owen?<br><br>
          My life is over.<br><br>
          Yes, very.<br>
          And dear--Isn't it wonderful how,<br>
          with the passing of years,<br>
          our conceptions of life grow<br>
          lighter and lighter?
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Thank you for coming.<br><br>
          Yes, I found it wonderful.<br><br>
          How is the school going?<br>
          Are you well?<br><br>
          I am well.<br><br>
          And you survived the fall of Tula?<br><br>
          Yes.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          do tell me the time.<br>
          I shall be in a hurry.<br><br>
          Oh, how quickly time flies!<br><br>
          Who knows?<br>
          Perhaps you shall hear of<br>
          it a long time later.<br><br>
          Well, well!<br>
          Well, well!
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Oh my dear friend, my beloved!<br><br>
          Oh, what a life!<br>
          Everything is new before our eyes.<br>
          Why do you look so sad?<br>
          This is not the time to be sad.<br>
          Take me to you?<br><br>
          You go now
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          uen s'est bien comme lui,<br>
          il me semble un h muettei !<br><br>
          Vivet !<br>
          voilà !<br><br>
          I am certainly glad to find<br>
          myself in this town!<br>
          Heavens, I
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          The well is running dry.<br>
          Will you get the baby out?<br><br>
          Here he is.<br><br>
          And here's a bottle of tubers.<br><br>
          And wherein?<br><br>
          The fleas have been checked.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          George.<br>
          .<br>
          .<br>
          .<br><br>
          To my son.<br>
          .<br>
          .<br>
          .<br>
          I'll go.<br>
          Good-bye.<br>
          I love you.<br>
          I go to sleep at night.<br><br>
          To the office.<br>
          .<br>
          .<br>
          .<br>
          I'm a fool
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          How are you, Sasha?<br>
          The weather's so beautiful to-day!<br>
          What's the matter with you?<br>
          Why are you so pale?<br><br>
          I'm irritable all the afternoon,<br>
          and I never slept either.<br><br>
          Do you like
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Yes, it's all right!<br><br>
          I'm just the same as always!<br>
          I have the same little girlfriend!<br><br>
          I know just the girl!<br><br>
          For heaven's sake, Georgi,<br>
          give her something to
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          have a nice day.<br><br>
          How is your health, cousin?<br><br>
          Fine, thanks to your imbibing.<br><br>
          Ivan Romanovitch, dear!<br><br>
          Steinbach!<br><br>
          What do you want?
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          How pale you look!<br><br>
          It's nice here, isn't it?<br><br>
          Yes, it is.<br>
          You're not cold, are you?<br><br>
          No,<br>
          I'm much better now; I feel<br>
          as if I'd reached my
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          O mage!<br>
          My name is Osiris lives in the north,<br>
          he and his wife have two daughters:<br><br>
          You are my sister.<br><br><br>
          A-oo!<br><br>
          O Mum!<br><br>
          Please, please, let me go to
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          He stands up and walks off]<br><br>
          How are those fellows?<br>
          Killed each other's dogs.<br>
          How miserable, how pitiful, how strange,<br>
          how mental.<br>
          I love you Rosavela.<br>
          [She extends her hand to greet him
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          can I help you?<br>
          You've come to give me a kiss.<br>
          Thank you.<br><br>
          What is it?<br><br>
          Please don't, it's just a simple<br>
          'Mama, papa, eat, sleep,<br>
          whatever' kiss
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          are you?<br><br>
          Yes, my name is Agnieszka Gerasimich,<br>
          I am a teacher in the<br>
          local primary school.<br><br>
          Where are you from?<br><br>
          The same as you.<br><br>
          So you are a
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Ah--ha--<br><br>
          You liked Maximov when<br><br>
          He pleased me!<br>
          I liked him<br><br>
          You should have seen the happiness under<br><br>
          His airs frightened me.<br>
          I thought he was going<br>
          to be a great actor.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          This way!<br>
          Help!<br>
          Help!<br><br>
          Fool!<br>
          A skeptic cannot believe anything.<br><br>
          Heavens!<br>
          What a state of things!<br>
          Take me with you!<br>
          I'm short!<br>
          I'm little!<br>
          I'm loved
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm home!<br>
          <Cheers from the study!<br>
          And he comes into the sitting-room,<br>
          followed immediately by POFFEE-CUP,<br>
          by THE DOCTOR and BIRD!<br><br>
          What are you doing here?<br><br>
          Home
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I—I must be outside—"<br><br>
          The Russians are coming.<br><br>
          We are all inside.<br>
          The whole town is standing still.<br>
          It seems to me as if the whole of creation were<br>
          rolling down a dark pit into it; then suddenly
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Is my sister here?<br><br>
          Yes, she's here.<br><br>
          What delightful weather!<br>
          You ought to come out and have a look,<br>
          it's quite charming.<br><br>
          Yes, yes, it's quite lovely,<br>
          I've been here
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Octavian!<br>
          Today's lunch...<br>
          put it in the fridge.<br><br>
          Oh, shut the door, you foul phantoms!<br><br>
          I didn't see a thing!<br><br>
          ...And today we celebrate the Olympics,<br>
          and how
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          learn to listen to my voice!<br><br>
          I am unhappy, I assure you, my dear,<br>
          unhappy woman!<br>
          Why does the afternoon sunlight shine<br>
          so brightly in the garden?<br>
          And why do those dancing leaves<br>
          look so tenderly at me?<br>
          I
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          to you too, master!<br><br>
          This city is small,<br>
          it is warm and I don't like it.<br>
          I'm going away.<br><br>
          You're coming again?<br><br>
          We'll see.<br><br>
          Why?<br><br>
          I never told
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          you...you...<br><br>
          ...Is Sasha dead...or is she alive?<br><br>
          It is impossible to say.<br><br>
          It is very difficult, my dear friend,<br>
          but I shall try...And my watch<br>
          won't be broken...I
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          that old zap-fist of mine!<br><br>
          Stop that,<br>
          that's not what I meant to-day.<br><br>
          Wait.<br><br>
          We're not going away.<br>
          Oh, how funny you are.<br>
          I grant you everything you
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          have you got your supper ready?<br><br>
          Yes,<br>
          my stomach aches from before<br>
          the sun goes down.<br>
          Please don't say anything.<br><br>
          You are being too nice to me.<br>
          Tell me, tell me!<br><br>
          I have been
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          You've all gone away,<br>
          yet you're still here.<br>
          Lord, what a clean slate!<br>
          What can you make of it!<br><br>
          I'm a student of music, and I couldn't<br>
          be a less pleased if I had the time,<br>
          and
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          are you sure?<br>
          ...Yes.<br>
          * * * I am absolutely certain...<br>
          I have hung all the traces of my<br>
          non-existence, of eternity,<br>
          in the air.<br>
          * * * With a loud click,<br>
          as if from some locked cupboard
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Your mother, on my honour.<br><br>
          Your father, on mine!<br><br>
          I don't understand, you have<br>
          never beaten your wife,<br>
          have you?<br><br>
          I have.<br><br>
          This is the first time I have beaten
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          and good morning.<br><br>
          No, you really are a gentleman.<br><br>
          Yes, I am.<br><br>
          Where are you going?<br><br>
          I have no idea.<br>
          I am going to the old people's home.<br><br>
          When does
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Alexander.<br><br>
          What's the matter with you?...<br>
          Are you in pain?<br><br>
          N-nothing...<br><br>
          This must be the end.<br>
          I thought we were making peace.<br>
          I knew at once that this was<br>
          not my parting moment
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I am an old friend .<br>
          .<br>
          .<br>
          and accept this contribution as a<br>
          token of my sincere friendship.<br><br>
          You have poisoned the well.<br>
          I will now drink from it.<br><br>
          Not again.<br>
          The moment you begin to talk me
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm late .<br>
          .<br>
          .<br>
          I was going to call at you, Princess,<br>
          to ask for your mother,<br>
          but .<br>
          .<br>
          .<br>
          I went to your mother .<br>
          .<br>
          .<br>
          I saw her .<br>
          .<br>
          .<br>
          outside the gates.<br>
          Outside there is the sound
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Lady Bird!<br><br>
          Good morning, dear.<br>
          There is a lot of playing in the garden,<br>
          I must go to the ball.<br><br>
          Here is some green thyme for your soup,<br>
          it is very good.<br><br>
          Thank you
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Oh, I am happy...<br>
          I am happy...it's only I'm<br>
          not drinking tea...<br><br>
          Masha, my baby!<br><br><br>
          Do you hear that, baby?<br><br>
          Yes!<br><br>
          We have won an important stage!
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          You're late, old chap,<br>
          and I can't bear to stop here.<br><br>
          I'd like to speak to you, your ladyship,<br>
          quite directly.<br>
          I'm tired of listening to you talk,<br>
          and I'm very sorry for
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          name of victim>,<br>
          you should come to-morrow.<br>
          I shall read you a line.<br>
          Be quiet.<br>
          My dear, charming, little soul,<br>
          do not cry.<br>
          Tell me everything in your thoughts.<br>
          I am a beautiful, a wonderful person
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          you don't see the point<br>
          of being a rich man,<br>
          do you?<br>
          ...I cannot meet another man.<br>
          I have left Arabia and Germany.<br>
          Now I live and work in this district,<br>
          in this house.<br>
          Men come and go by day and
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          is this Soprano?<br>
          Oh my heart.<br>
          Five thousand for him!<br><br>
          I am awfully sorry, my darling.<br><br>
          Here he is again.<br>
          Don't say a word.<br><br>
          It would be good for your health,<br>
          my little
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          squat, you two are eating!<br><br>
          Ready, ready?<br>
          Didn't you know?<br>
          You're a good, proud man!<br><br>
          Yes, I suppose I am!<br><br>
          What's your opinion of this restaurant,<br>
          colonel?
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          s strange.<br><br>
          So strange.<br>
          It’s almost nauseating.<br><br>
          The rats!<br>
          They’re gnawing at my apartment!<br>
          They’re gnawing at it,<br>
          no matter how old I am
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm so happy—Why, oh, why?...<br>
          Hmm?<br>
          What's the matter?...<br>
          Papa, is that you, Elizabeth?<br><br>
          Yes.<br><br>
          The doctor came here and told us<br>
          that he had a fit and had to
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Can I come in?<br><br>
          No, it's time to leave.<br>
          You've been here half a year already.<br>
          How dull and dirty this place is!<br><br>
          You're only sixteen.<br>
          What reason have you?<br><br>
          Why, my
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Where are you?<br>
          Sound of car!<br><br>
          There's been a commotion at the hotel.<br>
          Somebody broken in through the window.<br>
          Good-bye for a week!<br><br>
          How would you like to die, my
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Marina!<br><br>
          Good evening, everybody.<br>
          I am here on business and<br><br>
          When the furniture was<br>
          being put in last year<br><br>
          I am here on business.<br><br>
          You are late.<br><br>
          On business.<br><br>
          Yes
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Did you hear?<br>
          Wasn't it the beauty of her face?<br>
          And the way she smiled, her eyes, the way she walked, it was strangely<br>
          beautiful, I thought, that smile never left my lips,<br>
          that eye never left my brow
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          If only I could save you...If only...If<br>
          only I could save you!<br><br>
          Who is here?<br><br>
          I, Nikolai Ivanich!<br>
          Nikolai Ivanich!<br>
          What are you doing here?<br>
          Who are you?
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          What are you doing here?<br><br>
          I came to ask you if you knew where<br>
          we can find your mother.<br><br>
          Where?<br><br>
          And why?<br><br>
          I came to ask if you knew where<br>
          my mother is; I am in
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Why, you mean to say—"<br><br>
          I am not making a real speech.<br>
          I am only repeating what the lackeys<br>
          have said to me for seven years.<br>
          They have all gone on getting<br>
          rich, as you see,<br>
          without
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          John, how's your girl?<br><br>
          Good, very good.<br><br>
          She came in with me this morning.<br><br>
          That means it's time for her to<br>
          get ready to go to school.<br>
          She's a school girl, that
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          is my father.<br>
          I have been away a long time.<br>
          .<br>
          .<br>
          .<br>
          Where are the others?<br>
          Where is Emma?<br>
          Ilya ?""I am well.<br>
          .<br>
          .<br>
          .<br>
          All is over .<br>
          .<br>
          ."<br><br>
          Father, mother, this
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          How are you?<br>
          All's well!<br><br>
          Yes, of course.<br><br>
          Good morning, everybody!<br><br>
          What brings you to this place?<br><br>
          I have come to say good-bye.<br><br>
          How are you, my
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm going home...<br>
          you alone will go...<br>
          sooner or later, you two must give<br>
          up hope, stop loving each other,<br>
          and disappear into the distance...<br><br>
          Misha, you're too noisy!<br>
          You're not nice, you
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          and how I love you, oh, how I love you.<br>
          …I love you so much, I<br>
          forget who you are,<br>
          I love you more than I can imagine.<br>
          …I am lost forever, lost forever.<br><br>
          Shall I go
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          cousin!<br>
          Your clock strikes eleven!<br>
          Oh, can you imagine that, for just one moment,<br>
          all day you have been scrubbing and scrubbing,<br>
          and yet this minute nothing has changed!<br><br>
          Really, cousin,<br>
          this is absolutely incredible!
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Dear Madame,<br>
          how dreary your life must be!<br>
          You love nothing but money, and when you begin<br>
          to suffer you cry, "Oh, how I hate myself,<br>
          how I hate myself!" And I know<br>
          that I am not making this
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Why don't you sleep on the floor?<br><br>
          I can't.<br>
          I'm crying.<br>
          And you, Sergei!<br>
          Wake up!<br><br>
          I'm going.<br>
          There's nothing else to say.<br><br>
          Oh, Lord!
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I had forgotten Joseph!<br><br>
          I'm not here to see Joseph,<br>
          it's time for you to go.<br><br>
          I'm afraid I might injure myself,<br>
          so I came here to you.<br><br>
          Why do you do that, Alex
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Sophy?<br><br>
          Yes?<br><br>
          Oh, how I should like to be seated!<br>
          Oh, Ilya,<br>
          how I should like to be seated!<br><br>
          Sofya Yegorovna, please.<br><br>
          The
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          endoftext|>There are thousands of<br>
          different strains of cannabis,<br>
          and each one has unique medicinal<br>
          and therapeutic uses.<br>
          The difficulty is that no one<br>
          can agree on a safe dosage.<br><br>
          My daughter was born almost<br>
          seven years ago,<br>
          and so far she hasn
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Talia!"<br><br>
          It's all right, Misha.<br><br>
          I've come to say good-bye.<br>
          Is it you, Leonid?<br>
          Good-bye!<br><br>
          I don't know when I was<br>
          born or when I stopped
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          how is the fire?<br>
          Yes, it is burning so.<br><br>
          Good.<br>
          You have burnt the rubbish<br>
          from your daughter's room.<br><br>
          How?<br><br>
          Is Rudolf here yet?<br>
          He has not been inside for a long time.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          my good friend....<br><br>
          Sleep well, your ladyship.<br><br>
          You're tired, you're hot,<br>
          no matter what you do.<br>
          Life is hard, your ladyship.<br><br>
          Off I go, to the South Pole
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Mother.<br><br>
          This is Sylvia.<br><br>
          I know how you feel.<br>
          I know.<br><br>
          All right, all right.<br>
          Now we'll go.<br>
          I've had enough, I've had it, I'm going.<br>
          You understand
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Sir, it's you!<br><br>
          Yes…I'm here, Olga.<br>
          I'm here!<br><br>
          Really…I've been waiting a<br>
          long time for this day!<br>
          And it's finally here!<br>
          …I'm so happy
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          it is I!<br>
          With joy, I set off for Trenčín!<br><br>
          I heard him on the tram.<br><br>
          He is here.<br><br>
          Is it the same one you<br>
          used to see every day?<br>
          And your face?
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          if you knew what that meant.<br>
          You shouldn't cry.<br><br>
          It's quite alright.<br><br>
          And what else?<br>
          And what about dinner?<br><br>
          I eat like this all the time.<br><br>
          Excellent.<br>
          You must give your
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          You like this because...<br>
          this is...<br>
          this is how it is...<br><br>
          When will the gentlemen go home?<br><br>
          They are to follow them home.<br><br>
          Come, let us go.<br><br>
          It is time for me to go.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          to you, dear girl,<br>
          for the first time in a long time!<br><br>
          It's all the same to me, I can't move.<br>
          They're forcing me to come,<br>
          they really want to.<br>
          The idea of my happiness must either
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          you, Red Riding Hood!<br><br>
          To tell you the truth,<br>
          I've nothing better to do than now.<br>
          Everyone around here is busy, the Colonel<br>
          is here, all kinds of people come,<br>
          and when I go out into the street I feel
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          We are here too.<br><br>
          Then we could sleep here.<br><br>
          I think that would be very nice.<br><br>
          It would be nice if it were not so cold.<br><br>
          It must be so cold for three months in
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm not pleased !"<br><br>
          "Oh my gosh,<br>
          she's brought us two poverty to-day!<br>
          Isn't she a noble soul?<br>
          I asked her to tea yesterday,<br>
          and I didn't get the impression
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          is my cute little cosmonaut!" The three of them sat together<br>
          in her living-room, beside her sewing chair,<br>
          her lady-key in her hand.<br><br>
          I suppose we are going on holiday?<br><br>
          Indeed.<br>
          We must be
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Hi!<br>
          My name is Kuzmich, and this is my wife.<br>
          Take this glass to the housemaid, Irina,<br>
          now.<br><br>
          Is it real?<br><br>
          Yes...<br>
          It is.<br>
          It didn't happen in real
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          m'am!, small talk, please,<br>
          but I'^ll try to keep out of it.<br>
          There, you see, there.<br>
          Such a queer, lugubrious,<br>
          horrible fellow this Order of<br>
          the Garter Snake is! I'm
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          has he left me?<br>
          I am too frightened to go to him.<br><br>
          Have you told him that<br>
          my carriage is here?<br><br>
          I have.<br><br>
          That is curious.<br>
          How?<br><br>
          I am afraid he may be jealous; he
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          You're late for work!<br><br>
          Father, have some patience!<br>
          Don't let them irritate me.<br>
          You did a fine job, a very fine job.<br><br>
          You're not angry with me?<br>
          Have you changed your ways?
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Sandy...<br>
          Please let's go to the river...<br><br>
          We'll go.<br>
          There's no use in waiting<br>
          for the horses.<br>
          We shall find the way alone.<br>
          We shall walk alone in the woods<br>
          until we find the riverbank.<br>
          Then
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          It is a long while since<br>
          I was in your house.<br>
          I had an ice-cream for lunch!<br><br>
          What an extraordinary story<br>
          you are going to tell me!<br>
          I am going to eat it and not eat<br>
          anything for the next two
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I was hungry too!<br><br>
          It isn't dinner time yet, is it?<br><br>
          No, but the rehearsal is!<br>
          We are going to rehearse<br>
          for three whole hours,<br>
          and we will have dinner at four.<br><br>
          Thank you
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-small-text">Luulepank, 2021</span>',
      },
    ],
    en: [
      {
        title: "",
        poem: `
          old man!<br><br>
          What a fresh face!<br>
          He seems to be in a fever.<br>
          He wants to wash his face<br>
          with cold water,<br>
          but the girls wouldn't let him.<br><br>
          Is it Frank?<br>
          Tell me, what is it
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I have something to tell you.<br><br>
          What is it?<br><br>
          I have something to tell you<br>
          that is very important,<br>
          very important.<br>
          There is an old woman in a little<br>
          village on the Danube –<br>
          What is she saying?<br><br>
          my little friend.<br>
          I've been neglecting you.<br><br>
          He ought to come in every day,<br>
          he's got to be in the house.<br>
          .<br>
          .<br><br>
          What an idea!<br>
          We ought to have a shilling in the bank.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Lucy.<br>
          You, you and mommy and daddy.<br><br>
          I am as cold as an iceberg.<br>
          Yasha, have the wine.<br><br>
          Dear friend,<br>
          I am content to be a nobody.<br>
          I have purchased a plot of land
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          “To you too," she said.<br>
          "Let me go."<br><br>
          "Yes," I said, clasping her close.<br><br>
          "How beautiful you are today!"<br><br>
          It's not beautiful, it's just filthy,<br>
          don't you know
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          You're late!<br><br>
          I'm not late.<br>
          It's eight o'clock already.<br><br>
          Then I suppose it's eight already.<br><br>
          Yes, it seems so.<br>
          Is it?<br><br>
          It's eight.<br>
          Ah, well
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'll try to make you happy, but--<br><br>
          That's enough, with your wife.<br>
          I'll call off the trial on Thursday.<br><br>
          You're a fool to say such things,<br>
          but--no.<br>
          You don't understand.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Stop that, please!<br><br>
          Enough, enough!<br>
          We're not playing,<br>
          it's time we got started!<br>
          Or is it...<br>
          is it...<br>
          ?<br><br>
          Let's go to the shop first.<br><br>
          Ah, here they
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Let's go over to the boat.<br>
          May I?<br><br>
          Yes, go.<br><br>
          It's quite cold in here,<br>
          it's quite cold.<br><br>
          It ought to be very cold.<br>
          Let's sit inside.<br>
          Here,
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Undine, are you here?<br><br>
          Yes, actually I was just going to go in,<br>
          but...<br>
          There...<br>
          there...<br><br>
          What are you doing, Platonov?<br><br>
          I should like to tell you myself, if
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          What time is it?<br><br>
          Five minutes.<br><br>
          Two minutes.<br>
          You are quite exhausted.<br><br>
          I am.<br><br>
          You have worked so hard today.<br>
          You have tasted so much good food.<br>
          Please, let us drink some cold
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
        This is embarrassing…<br><br>
        Guilt, too, my friends!<br>
        We have not been so filthy<br>
        since the war.<br><br>
        We all miss the war, and a man may be forgiven<br>
        for thinking he has lived without the past,<br>
        but let
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          uncle!<br><br>
          What's the matter?<br><br>
          I--I'm so embarrassed.<br>
          Uncle, uncle,<br>
          what's the matter with you?<br>
          Why are you so cold?<br>
          I've kept my lips shut for so long,<br>
          I've wanted to
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          My name is Vinogradov,<br>
          and I am a Civil Engineer.<br>
          I am sorry to have to come to you,<br>
          Margit.<br><br>
          Oh, I am so glad you did.<br>
          Tell them to come in at once.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I know it must seem strange, but...<br>
          forgive me for saying so… I have <br>
          committed a heinous sin,<br>
          and must live with this shame forever.<br>
          I am a failure…<br><br>
          And I have killed many a good man…<br><br>
          Really
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          So what?<br>
          Do you want to know?<br>
          I did not do it.<br><br>
          I've told you everything,<br>
          I'm tired of you.<br>
          Oh, Catherine, Catherine,<br>
          what is she thinking of now?<br><br>
          Tell me,
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          can I help you?<br>
          I've lost all my money.<br><br>
          How's the horse?<br>
          Is he all right?<br><br>
          Yes, he's all right.<br><br>
          What happened to the others?<br>
          Where did they all go?
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Please.<br>
          All of you...please...<br><br>
          I...<br>
          Where am I?<br>
          Where am I?<br>
          Jerusalem...it's in the air!<br><br>
          I can't.<br>
          I feel as if my soul is floating
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          can I borrow your coat?<br><br>
          No,<br>
          I shan't let you put it on till supper.<br><br>
          Oh, oh, oh!<br>
          How cruel you are!<br><br>
          Stop it!<br>
          You're getting on my nerves!
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm home.<br>
          I had a short holiday.<br>
          ..."<br><br>
          "A short holiday?"<br><br>
          "Well, look at him now: a cripple, with<br>
          bad feet, walking and talking,<br>
          and a tray of porridge for lunch!"
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          evil ones, you should keep your<br>
          distance from each other,<br>
          for our present state of things<br>
          have become intolerable.<br>
          I am becoming quite ill at<br>
          the thought of it all.<br><br>
          What nonsense is this, nonsense!<br>
          What noble tradition is this, what
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          all!<br><br>
          Yes,<br>
          we have the river flowing<br>
          right through here!<br><br>
          My dear, precious treasure, good-bye!<br><br>
          What are you reading now?<br><br>
          The best of Russian literature,<br>
          a wonderful author,<br>
          a Russian of
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          to you, sweetheart." I've had a rough time lately, and theoretically<br>
          I could be released from my vow of silence, and finally forgiven,<br>
          and allowed to live a normal life.<br>
          But what should I do?<br>
          What, for instance
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Come, let's go into the forest!<br>
          We haven't had any quiet since morning.<br><br>
          You said you'd be back in an hour.<br>
          Have I the right to tell you so?<br><br>
          You do?<br>
          Oh, you're awfully
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm going to spend the night here!<br><br>
          Yes, yes, spend the night here.<br>
          It's a fine place to live,<br>
          and the servants are all<br>
          in the best of health.<br>
          But your health is so bad!
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          makes my stomach turn.<br><br>
          He fell on hard times.<br>
          We are not here to condemn him,<br>
          but we are happy that in his<br>
          case we have been heard.<br>
          When a man defaults he always retires into<br>
          himself; he cannot touch the ground
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Yang!<br><br>
          To hell with her!<br>
          Oh, my sweet child!<br><br>
          Are you well?<br><br>
          I'm just fine, thank you.<br><br>
          You'd better rest, Nicholas.<br>
          He's got cold.<br><br>
          Yes
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          you, I've got to go!<br><br>
          Don't go,<br>
          we'll find a seat for<br>
          you somewhere else.<br><br>
          Thank you.<br><br>
          I've forgotten.<br>
          Shall I leave now?<br><br>
          No, why not?<br><br>
          What
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Hiroto-san!<br><br>
          Where have you been?<br>
          Who is there after us?<br><br>
          I do not know.<br>
          I am so bored!<br>
          I spend all my time and attention in thinking<br>
          up ways to get Buffon to come
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          brother!<br><br>
          What is it, Papa?<br><br>
          I was pondering it, and came to the conclusion that we should<br>
          all be slaves if it weren't for my beloved pet parrot,<br>
          Whiskers.<br><br>
          What a wonderful
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          everybody!<br>
          How's it going?<br>
          Dad's back with milk and jam,<br>
          how's your health?<br><br>
          Fine.<br><br>
          What's the matter with you, darling?<br><br>
          My soul is delighted and full of life.<br>
          My soul
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Fang Yezi!<br><br>
          The grocery store…?<br>
          It's closed!<br><br>
          It's broken into!<br>
          We can't come in!<br><br>
          We've got to go to the grocery store!<br><br>
          Gone to the grocery store
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          No.<br><br>
          Aunty, can I have some jam with you?<br><br>
          Not for that.<br><br>
          What is it?<br><br>
          The doctor has pushed his<br>
          box over to the right,<br>
          and it is now getting light
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          What is it?<br>
          Is it Marian's birthday present time?<br><br>
          A present for her.<br>
          It's a little red velvet trunk<br>
          with a red rose on it.<br><br>
          What's that?<br><br>
          A present for her.<br>
          Her illness
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          let me kiss them softly!<br>
          ...What is the matter with you?<br>
          -What d'you say?<br>
          -Yes,<br>
          I am always angry with myself and always<br>
          feel that I am not quite myself.<br>
          I am incredibly unhappy.<br>
          Why is this?
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          love, I'm going away now, oh my God<br><br>
          You're going away now, soon.<br><br>
          When will it be, long day, or short one,<br>
          dear?<br><br>
          Short one, dear.<br>
          You never know.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I sure do loved you !<br>
          you've changed so much in two years that<br>
          I can't put myself in your place.<br>
          I left school at fifteen, and since<br>
          then I've thrown myself into work,<br>
          and have worked eighteen<br>
          hours a day — eighteen
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm so happy to have found you<br>
          everywhere in the town!<br><br>
          How lovely you are!<br>
          How beautiful!<br>
          You're so kind!<br>
          Thank you for everything,<br>
          for everything!<br>
          Forgive me,<br>
          I forget my manners--thank you for
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          my dearest...<br>
          I shall be damned if I let you down.<br>
          Forgive me, forgive me...<br>
          forgive me...<br>
          forgive me!<br><br>
          Don't, Angela,<br>
          I don't want to hear any more!<br><br>
          What is it,
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          To my home I come from!<br>
          Hello, Katerina Ponomareva!<br><br>
          "I shall go on foot to the river." That is what the women<br>
          of Kirov want: a man of honour, some responsibility,<br>
          a
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          That's only half the story!<br>
          You came to town on business,<br>
          but I didn't.<br>
          Whoever you are, you are irritating!<br><br>
          One of the sisters of<br>
          the First Consulate--<br><br>
          Certainly.<br><br>
          I
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm late.<br><br>
          I'm afraid we ran off the rope<br>
          while dressing just now.<br><br>
          What rope?<br><br>
          That twine that's tied to the tree.<br><br>
          I was telling Martha about that<br>
          old log that felled some
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          little lamia,<br>
          why are you so moody this evening?<br>
          why do you cry so?<br>
          it could just be the weather...<br><br>
          ...What are you crying for?<br>
          for wha t?<br><br>
          for wha t?<br>
          nya
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Take your luggage off...<br><br>
          No, I want to stay!<br>
          Where is my cigar?<br><br>
          Here it is in the palm of my hand.<br>
          I smoke it every day.<br>
          It is pleasant to smoke.<br><br>
          What is
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          from home.<br>
          .<br>
          .<br>
          .<br>
          My wife is just the same.<br><br>
          She is coming?<br>
          Is that you, Natasha?<br><br>
          Yes, darling.<br>
          Let me tell you how I feel, how I am!<br>
          A cold sweat goes down my spine
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          What time is it?<br><br>
          An hour ago.<br><br>
          An hour ago!<br>
          And now it is nearly dawn.<br>
          Who knows what the weather<br>
          will be like tomorrow.<br>
          We must go.<br><br>
          What delightful views!<br>
          In the evening light the
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Please offer me something to drink,<br>
          Father.<br>
          I'm freezing...<br>
          Father...<br>
          I'm cold...<br>
          I'm cold...<br>
          let me stay here here...<br><br>
          Excuse me, Miss Masha, but I'm freezing,<br>
          too...
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Saul.<br><br>
          There's an owl!<br>
          Eh?<br>
          What a coincidence!<br><br>
          What a coincidence, too!<br>
          It wasn't my doing.<br>
          Is that you, Peter?<br><br>
          It is I!<br>
          I've taken off my coat!<br>
          Aren
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          It's about time!<br>
          My, my, we all have short temperes.<br>
          Are you asleep, Katie?<br><br>
          Yes, sir.<br><br>
          Your eyes look as if you were asleep.<br><br>
          Yes, sir.<br><br>
          You
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          and good morning…and to-morrow morning,<br>
          righteously…<br><br>
          You<<br><br>
          Surely you shouldn't say<br>
          anything like that!<br>
          You<<br><br>
          I'll be quiet, Misha.<br><br>
          I didn't find the body
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Do you know where you are?<br><br>
          Where?<br>
          Where?!<br><br>
          In the peasant's hole!<br>
          Ah,<br>
          where would we be without each other!<br>
          Come, my darling, come!<br>
          Let me hold you!<br><br>
          My arms are
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Birobidz-vanadu, do come!<br>
          It is time!<br>
          Come, humbug!<br>
          ...Oh, I don't see the real me any more.<br>
          They have been feeding me ever<br>
          since I have come here,<br>
          and as
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          is Mr.<br>
          Paltchnik."<br><br>
          "Yes."<br><br>
          "I am so happy to see you!"<br><br>
          "Very happy indeed," I answered,<br>
          "and so sad, too,<br>
          to see you go now.<br>
          Please don't
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          does this mean...<br><br>
          To every cat that walks on two legs there<br>
          is one there who needs to be fed.<br>
          He is exhausted from his long journey.<br><br>
          Then you are tired already,<br>
          Ivan Romanovitch.<br><br>
          I don
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          ma, you're so tired today!" ...<br>
          A woman with a sunflower in her hand cries<br>
          out to a shop-girl for directions.<br>
          "Go and tell the shop-girl<br>
          to go for Sympathy!"<br><br>
          One can understand her
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          did you hear?<br>
          That man is a Russian.<br><br>
          What's the matter with me?<br>
          My head's about to explode.<br>
          Those red eyes....<br>
          Man, when I reach thirty...<br>
          I'll marry a rich man,<br>
          you understand....
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          is this the office on which you work?<br>
          No; I went to dinner at my sister's.<br><br>
          To-morrow we'll go away.<br><br>
          Good-bye.<br>
          I've no anxiety about you;<br>
          you're a free man
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Max.<br><br>
          Do you remember how we used to play this terrible<br>
          flute-partie when we used to live here?<br><br>
          I don't!<br>
          I don't!<br><br>
          Oh, poor girl, oh, wretch!
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I am here; thank you!<br><br>
          Vanya, my dear,<br>
          you have done me justice; I have never in my life heard<br>
          such an exclamation befitting your character!<br><br>
          You are still a virgin, doctor.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          little mortal.<br>
          Good-bye.<br><br>
          The engineer brought me<br>
          a package from Moscow!<br>
          What a coincidence!<br><br>
          A package?<br>
          From Moscow?<br>
          How strange!<br>
          Red in the middle!<br><br>
          It's a present for you, little
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          is Olga.<br>
          I am very happy to see you!<br><br>
          What do you mean by this happiness?<br><br>
          Your mother says that you have been<br>
          lying ill ever since you came here,<br>
          and that you have even<br>
          been afraid to go to
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          to the Peruvians,<br><br>
          I'm in love,<br>
          I've been in love for fifty years now!<br><br>
          For fifty years!<br>
          And why?<br>
          Because you people live like animals, never<br>
          content with the earth you inhabit,<br>
          you work without
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Now that they've found me,<br>
          how can I get them to<br>
          give me back my coat?<br>
          I can go on my way,<br>
          but they can't take me away.<br>
          They won't understand me.<br><br>
          You're too kind...<br>
          Please,
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          You must come to a decision<br>
          about this myself,<br>
          or else I shall dismiss you.<br><br>
          Well?<br>
          And what about it?<br><br>
          And this and the following, please.<br><br>
          Agreed?<br>
          The rent hasn't gone
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          The noise was terrible."<br><br>
          Yes, they had gone away early to-day,<br>
          and we hardly knew each<br>
          other from the other!<br>
          I shed a tear or two, too.<br>
          I know not when we shall meet again.<br><br>
          "
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          the doctor!<br>
          He was going to come in, he<br>
          said he wanted to see me,<br>
          he wanted to speak to me.<br>
          My name is—I don't know what you want,<br>
          really—Marshall!<br><br>
          Oh, my name is
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I sure am full of pleasure<br>
          when I am on my feet!<br><br>
          It's summer now,<br>
          but I'm afraid the temperature<br>
          will drop further...<br>
          It's summer now,<br>
          but I'm afraid the temperature<br>
          will drop further...<br>
          It's summer
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          What are you doing here?<br><br>
          A stroll in the fields.<br><br>
          I know you're not.<br>
          Why are you running about here?<br><br>
          I feel like going swimming.<br><br>
          It's nothing.<br>
          Don't feel guilty
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          It's all right.<br>
          Back in the hotel room, with<br>
          the fire, the cold,<br>
          and the noise....<br>
          But the piano doesn't seem to mind.<br><br>
          What did the Baron do?<br><br>
          He stood on Napoleon's grave in
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          He's asleep.<br><br>
          I don't know what he's doing,<br>
          he's been asleep a long time……<br><br>
          Shall I get him some tea,<br>
          he'll be very tired.<br><br>
          He's really a silly fellow
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          to you too, t'other day!<br>
          <Shakes head.<br><br>
          Where?<br><br>
          Here, listen here,<br>
          I've been sleeping all night in the library because my brother<br>
          Sebastien and I couldn't get into the court garden; we
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          God, what a frightful noise it made!<br>
          <exits,<br>
          turns to see what the matter<br>
          is while > What is it?<br><br>
          What is it?<br><br>
          Just turn and look at me, Nicolas.<br><br>
          The devil forbid
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I don't know what to do!<br>
          I don't know whom to talk to!<br><br>
          She treated me with great dignity!<br><br>
          Why do you come to me?<br><br>
          I have been wanting to<br>
          talk to you all night.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          the best of luck on your voyage<br><br>
          To think that I am only<br>
          forty-seven years old!<br>
          I have been with you from the<br>
          first day I laid eyes on you.<br>
          I have carried your clothes<br>
          and your luggage.<br>
          We have loved and hated
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Yes, sir.<br><br>
          My name is Sergei,<br>
          I am a lieutenant in the 105th<br>
          Mechanized Rifle Battalion.<br>
          I am on leave and not yet<br>
          entitled to pension,<br>
          but I ask you to forgive my silence.<br>
          I thank you
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm not going to school today.<br><br>
          It's dreadful, you know, it's dreadful.<br>
          He blinked.<br><br>
          Who's there?<br><br>
          It's my wife.<br><br>
          Don't laugh, I laughed before.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm going to leave our<br>
          apartment to-morrow.<br>
          I have a lot of things to take care of,<br>
          you can imagine.<br>
          I've finished the picture that Lydia promised to make<br>
          for me and now I have to look after her archives.<br>
          I
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          this is Jiri, she's the receptionist"<br><br>
          It's you, it's me.<br>
          What are you looking at?<br><br>
          It's Athanasius, he's coming.<br>
          I've got to go now, I can't
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Oh, then it's done.<br><br>
          Thanks to you I don't feel<br>
          like kissing you anymore.<br><br>
          You're my husband, my hero, I love<br>
          you, all of you, my whole being,<br>
          is devoted to you.<br>
          I
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          asking for helpurgentlyto repair the damage<br>
          done to our estate yesterday evening William .<br><br>
          Oh, how I long to go to Tvverka!<br>
          I am at last going to visit the dear<br>
          old house in the forest with my
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Auntie Masha!<br>
          How are you, Owen?<br><br>
          My life is over.<br><br>
          Yes, very.<br>
          And dear--Isn't it wonderful how,<br>
          with the passing of years,<br>
          our conceptions of life grow<br>
          lighter and lighter?
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Thank you for coming.<br><br>
          Yes, I found it wonderful.<br><br>
          How is the school going?<br>
          Are you well?<br><br>
          I am well.<br><br>
          And you survived the fall of Tula?<br><br>
          Yes.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          do tell me the time.<br>
          I shall be in a hurry.<br><br>
          Oh, how quickly time flies!<br><br>
          Who knows?<br>
          Perhaps you shall hear of<br>
          it a long time later.<br><br>
          Well, well!<br>
          Well, well!
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Oh my dear friend, my beloved!<br><br>
          Oh, what a life!<br>
          Everything is new before our eyes.<br>
          Why do you look so sad?<br>
          This is not the time to be sad.<br>
          Take me to you?<br><br>
          You go now
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          uen s'est bien comme lui,<br>
          il me semble un h muettei !<br><br>
          Vivet !<br>
          voilà !<br><br>
          I am certainly glad to find<br>
          myself in this town!<br>
          Heavens, I
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          The well is running dry.<br>
          Will you get the baby out?<br><br>
          Here he is.<br><br>
          And here's a bottle of tubers.<br><br>
          And wherein?<br><br>
          The fleas have been checked.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          George.<br>
          .<br>
          .<br>
          .<br><br>
          To my son.<br>
          .<br>
          .<br>
          .<br>
          I'll go.<br>
          Good-bye.<br>
          I love you.<br>
          I go to sleep at night.<br><br>
          To the office.<br>
          .<br>
          .<br>
          .<br>
          I'm a fool
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          How are you, Sasha?<br>
          The weather's so beautiful to-day!<br>
          What's the matter with you?<br>
          Why are you so pale?<br><br>
          I'm irritable all the afternoon,<br>
          and I never slept either.<br><br>
          Do you like
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Yes, it's all right!<br><br>
          I'm just the same as always!<br>
          I have the same little girlfriend!<br><br>
          I know just the girl!<br><br>
          For heaven's sake, Georgi,<br>
          give her something to
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          have a nice day.<br><br>
          How is your health, cousin?<br><br>
          Fine, thanks to your imbibing.<br><br>
          Ivan Romanovitch, dear!<br><br>
          Steinbach!<br><br>
          What do you want?
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          How pale you look!<br><br>
          It's nice here, isn't it?<br><br>
          Yes, it is.<br>
          You're not cold, are you?<br><br>
          No,<br>
          I'm much better now; I feel<br>
          as if I'd reached my
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          O mage!<br>
          My name is Osiris lives in the north,<br>
          he and his wife have two daughters:<br><br>
          You are my sister.<br><br><br>
          A-oo!<br><br>
          O Mum!<br><br>
          Please, please, let me go to
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          He stands up and walks off]<br><br>
          How are those fellows?<br>
          Killed each other's dogs.<br>
          How miserable, how pitiful, how strange,<br>
          how mental.<br>
          I love you Rosavela.<br>
          [She extends her hand to greet him
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          can I help you?<br>
          You've come to give me a kiss.<br>
          Thank you.<br><br>
          What is it?<br><br>
          Please don't, it's just a simple<br>
          'Mama, papa, eat, sleep,<br>
          whatever' kiss
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          are you?<br><br>
          Yes, my name is Agnieszka Gerasimich,<br>
          I am a teacher in the<br>
          local primary school.<br><br>
          Where are you from?<br><br>
          The same as you.<br><br>
          So you are a
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Ah--ha--<br><br>
          You liked Maximov when<br><br>
          He pleased me!<br>
          I liked him<br><br>
          You should have seen the happiness under<br><br>
          His airs frightened me.<br>
          I thought he was going<br>
          to be a great actor.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          This way!<br>
          Help!<br>
          Help!<br><br>
          Fool!<br>
          A skeptic cannot believe anything.<br><br>
          Heavens!<br>
          What a state of things!<br>
          Take me with you!<br>
          I'm short!<br>
          I'm little!<br>
          I'm loved
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm home!<br>
          <Cheers from the study!<br>
          And he comes into the sitting-room,<br>
          followed immediately by POFFEE-CUP,<br>
          by THE DOCTOR and BIRD!<br><br>
          What are you doing here?<br><br>
          Home
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I—I must be outside—"<br><br>
          The Russians are coming.<br><br>
          We are all inside.<br>
          The whole town is standing still.<br>
          It seems to me as if the whole of creation were<br>
          rolling down a dark pit into it; then suddenly
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Is my sister here?<br><br>
          Yes, she's here.<br><br>
          What delightful weather!<br>
          You ought to come out and have a look,<br>
          it's quite charming.<br><br>
          Yes, yes, it's quite lovely,<br>
          I've been here
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Octavian!<br>
          Today's lunch...<br>
          put it in the fridge.<br><br>
          Oh, shut the door, you foul phantoms!<br><br>
          I didn't see a thing!<br><br>
          ...And today we celebrate the Olympics,<br>
          and how
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          learn to listen to my voice!<br><br>
          I am unhappy, I assure you, my dear,<br>
          unhappy woman!<br>
          Why does the afternoon sunlight shine<br>
          so brightly in the garden?<br>
          And why do those dancing leaves<br>
          look so tenderly at me?<br>
          I
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          to you too, master!<br><br>
          This city is small,<br>
          it is warm and I don't like it.<br>
          I'm going away.<br><br>
          You're coming again?<br><br>
          We'll see.<br><br>
          Why?<br><br>
          I never told
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          you...you...<br><br>
          ...Is Sasha dead...or is she alive?<br><br>
          It is impossible to say.<br><br>
          It is very difficult, my dear friend,<br>
          but I shall try...And my watch<br>
          won't be broken...I
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          that old zap-fist of mine!<br><br>
          Stop that,<br>
          that's not what I meant to-day.<br><br>
          Wait.<br><br>
          We're not going away.<br>
          Oh, how funny you are.<br>
          I grant you everything you
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          have you got your supper ready?<br><br>
          Yes,<br>
          my stomach aches from before<br>
          the sun goes down.<br>
          Please don't say anything.<br><br>
          You are being too nice to me.<br>
          Tell me, tell me!<br><br>
          I have been
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          You've all gone away,<br>
          yet you're still here.<br>
          Lord, what a clean slate!<br>
          What can you make of it!<br><br>
          I'm a student of music, and I couldn't<br>
          be a less pleased if I had the time,<br>
          and
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          are you sure?<br>
          ...Yes.<br>
          * * * I am absolutely certain...<br>
          I have hung all the traces of my<br>
          non-existence, of eternity,<br>
          in the air.<br>
          * * * With a loud click,<br>
          as if from some locked cupboard
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Your mother, on my honour.<br><br>
          Your father, on mine!<br><br>
          I don't understand, you have<br>
          never beaten your wife,<br>
          have you?<br><br>
          I have.<br><br>
          This is the first time I have beaten
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          and good morning.<br><br>
          No, you really are a gentleman.<br><br>
          Yes, I am.<br><br>
          Where are you going?<br><br>
          I have no idea.<br>
          I am going to the old people's home.<br><br>
          When does
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Alexander.<br><br>
          What's the matter with you?...<br>
          Are you in pain?<br><br>
          N-nothing...<br><br>
          This must be the end.<br>
          I thought we were making peace.<br>
          I knew at once that this was<br>
          not my parting moment
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I am an old friend .<br>
          .<br>
          .<br>
          and accept this contribution as a<br>
          token of my sincere friendship.<br><br>
          You have poisoned the well.<br>
          I will now drink from it.<br><br>
          Not again.<br>
          The moment you begin to talk me
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm late .<br>
          .<br>
          .<br>
          I was going to call at you, Princess,<br>
          to ask for your mother,<br>
          but .<br>
          .<br>
          .<br>
          I went to your mother .<br>
          .<br>
          .<br>
          I saw her .<br>
          .<br>
          .<br>
          outside the gates.<br>
          Outside there is the sound
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Lady Bird!<br><br>
          Good morning, dear.<br>
          There is a lot of playing in the garden,<br>
          I must go to the ball.<br><br>
          Here is some green thyme for your soup,<br>
          it is very good.<br><br>
          Thank you
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Oh, I am happy...<br>
          I am happy...it's only I'm<br>
          not drinking tea...<br><br>
          Masha, my baby!<br><br><br>
          Do you hear that, baby?<br><br>
          Yes!<br><br>
          We have won an important stage!
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          You're late, old chap,<br>
          and I can't bear to stop here.<br><br>
          I'd like to speak to you, your ladyship,<br>
          quite directly.<br>
          I'm tired of listening to you talk,<br>
          and I'm very sorry for
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          name of victim>,<br>
          you should come to-morrow.<br>
          I shall read you a line.<br>
          Be quiet.<br>
          My dear, charming, little soul,<br>
          do not cry.<br>
          Tell me everything in your thoughts.<br>
          I am a beautiful, a wonderful person
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          you don't see the point<br>
          of being a rich man,<br>
          do you?<br>
          ...I cannot meet another man.<br>
          I have left Arabia and Germany.<br>
          Now I live and work in this district,<br>
          in this house.<br>
          Men come and go by day and
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          is this Soprano?<br>
          Oh my heart.<br>
          Five thousand for him!<br><br>
          I am awfully sorry, my darling.<br><br>
          Here he is again.<br>
          Don't say a word.<br><br>
          It would be good for your health,<br>
          my little
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          squat, you two are eating!<br><br>
          Ready, ready?<br>
          Didn't you know?<br>
          You're a good, proud man!<br><br>
          Yes, I suppose I am!<br><br>
          What's your opinion of this restaurant,<br>
          colonel?
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          s strange.<br><br>
          So strange.<br>
          It’s almost nauseating.<br><br>
          The rats!<br>
          They’re gnawing at my apartment!<br>
          They’re gnawing at it,<br>
          no matter how old I am
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm so happy—Why, oh, why?...<br>
          Hmm?<br>
          What's the matter?...<br>
          Papa, is that you, Elizabeth?<br><br>
          Yes.<br><br>
          The doctor came here and told us<br>
          that he had a fit and had to
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Can I come in?<br><br>
          No, it's time to leave.<br>
          You've been here half a year already.<br>
          How dull and dirty this place is!<br><br>
          You're only sixteen.<br>
          What reason have you?<br><br>
          Why, my
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Where are you?<br>
          Sound of car!<br><br>
          There's been a commotion at the hotel.<br>
          Somebody broken in through the window.<br>
          Good-bye for a week!<br><br>
          How would you like to die, my
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Marina!<br><br>
          Good evening, everybody.<br>
          I am here on business and<br><br>
          When the furniture was<br>
          being put in last year<br><br>
          I am here on business.<br><br>
          You are late.<br><br>
          On business.<br><br>
          Yes
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Did you hear?<br>
          Wasn't it the beauty of her face?<br>
          And the way she smiled, her eyes, the way she walked, it was strangely<br>
          beautiful, I thought, that smile never left my lips,<br>
          that eye never left my brow
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          If only I could save you...If only...If<br>
          only I could save you!<br><br>
          Who is here?<br><br>
          I, Nikolai Ivanich!<br>
          Nikolai Ivanich!<br>
          What are you doing here?<br>
          Who are you?
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          What are you doing here?<br><br>
          I came to ask you if you knew where<br>
          we can find your mother.<br><br>
          Where?<br><br>
          And why?<br><br>
          I came to ask if you knew where<br>
          my mother is; I am in
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Why, you mean to say—"<br><br>
          I am not making a real speech.<br>
          I am only repeating what the lackeys<br>
          have said to me for seven years.<br>
          They have all gone on getting<br>
          rich, as you see,<br>
          without
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          John, how's your girl?<br><br>
          Good, very good.<br><br>
          She came in with me this morning.<br><br>
          That means it's time for her to<br>
          get ready to go to school.<br>
          She's a school girl, that
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          is my father.<br>
          I have been away a long time.<br>
          .<br>
          .<br>
          .<br>
          Where are the others?<br>
          Where is Emma?<br>
          Ilya ?""I am well.<br>
          .<br>
          .<br>
          .<br>
          All is over .<br>
          .<br>
          ."<br><br>
          Father, mother, this
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          How are you?<br>
          All's well!<br><br>
          Yes, of course.<br><br>
          Good morning, everybody!<br><br>
          What brings you to this place?<br><br>
          I have come to say good-bye.<br><br>
          How are you, my
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm going home...<br>
          you alone will go...<br>
          sooner or later, you two must give<br>
          up hope, stop loving each other,<br>
          and disappear into the distance...<br><br>
          Misha, you're too noisy!<br>
          You're not nice, you
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          and how I love you, oh, how I love you.<br>
          …I love you so much, I<br>
          forget who you are,<br>
          I love you more than I can imagine.<br>
          …I am lost forever, lost forever.<br><br>
          Shall I go
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          cousin!<br>
          Your clock strikes eleven!<br>
          Oh, can you imagine that, for just one moment,<br>
          all day you have been scrubbing and scrubbing,<br>
          and yet this minute nothing has changed!<br><br>
          Really, cousin,<br>
          this is absolutely incredible!
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Dear Madame,<br>
          how dreary your life must be!<br>
          You love nothing but money, and when you begin<br>
          to suffer you cry, "Oh, how I hate myself,<br>
          how I hate myself!" And I know<br>
          that I am not making this
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Why don't you sleep on the floor?<br><br>
          I can't.<br>
          I'm crying.<br>
          And you, Sergei!<br>
          Wake up!<br><br>
          I'm going.<br>
          There's nothing else to say.<br><br>
          Oh, Lord!
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I had forgotten Joseph!<br><br>
          I'm not here to see Joseph,<br>
          it's time for you to go.<br><br>
          I'm afraid I might injure myself,<br>
          so I came here to you.<br><br>
          Why do you do that, Alex
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Sophy?<br><br>
          Yes?<br><br>
          Oh, how I should like to be seated!<br>
          Oh, Ilya,<br>
          how I should like to be seated!<br><br>
          Sofya Yegorovna, please.<br><br>
          The
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          endoftext|>There are thousands of<br>
          different strains of cannabis,<br>
          and each one has unique medicinal<br>
          and therapeutic uses.<br>
          The difficulty is that no one<br>
          can agree on a safe dosage.<br><br>
          My daughter was born almost<br>
          seven years ago,<br>
          and so far she hasn
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Talia!"<br><br>
          It's all right, Misha.<br><br>
          I've come to say good-bye.<br>
          Is it you, Leonid?<br>
          Good-bye!<br><br>
          I don't know when I was<br>
          born or when I stopped
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          how is the fire?<br>
          Yes, it is burning so.<br><br>
          Good.<br>
          You have burnt the rubbish<br>
          from your daughter's room.<br><br>
          How?<br><br>
          Is Rudolf here yet?<br>
          He has not been inside for a long time.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          my good friend....<br><br>
          Sleep well, your ladyship.<br><br>
          You're tired, you're hot,<br>
          no matter what you do.<br>
          Life is hard, your ladyship.<br><br>
          Off I go, to the South Pole
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Mother.<br><br>
          This is Sylvia.<br><br>
          I know how you feel.<br>
          I know.<br><br>
          All right, all right.<br>
          Now we'll go.<br>
          I've had enough, I've had it, I'm going.<br>
          You understand
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Sir, it's you!<br><br>
          Yes…I'm here, Olga.<br>
          I'm here!<br><br>
          Really…I've been waiting a<br>
          long time for this day!<br>
          And it's finally here!<br>
          …I'm so happy
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          it is I!<br>
          With joy, I set off for Trenčín!<br><br>
          I heard him on the tram.<br><br>
          He is here.<br><br>
          Is it the same one you<br>
          used to see every day?<br>
          And your face?
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          if you knew what that meant.<br>
          You shouldn't cry.<br><br>
          It's quite alright.<br><br>
          And what else?<br>
          And what about dinner?<br><br>
          I eat like this all the time.<br><br>
          Excellent.<br>
          You must give your
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          You like this because...<br>
          this is...<br>
          this is how it is...<br><br>
          When will the gentlemen go home?<br><br>
          They are to follow them home.<br><br>
          Come, let us go.<br><br>
          It is time for me to go.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          to you, dear girl,<br>
          for the first time in a long time!<br><br>
          It's all the same to me, I can't move.<br>
          They're forcing me to come,<br>
          they really want to.<br>
          The idea of my happiness must either
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          you, Red Riding Hood!<br><br>
          To tell you the truth,<br>
          I've nothing better to do than now.<br>
          Everyone around here is busy, the Colonel<br>
          is here, all kinds of people come,<br>
          and when I go out into the street I feel
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          We are here too.<br><br>
          Then we could sleep here.<br><br>
          I think that would be very nice.<br><br>
          It would be nice if it were not so cold.<br><br>
          It must be so cold for three months in
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm not pleased !"<br><br>
          "Oh my gosh,<br>
          she's brought us two poverty to-day!<br>
          Isn't she a noble soul?<br>
          I asked her to tea yesterday,<br>
          and I didn't get the impression
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          is my cute little cosmonaut!" The three of them sat together<br>
          in her living-room, beside her sewing chair,<br>
          her lady-key in her hand.<br><br>
          I suppose we are going on holiday?<br><br>
          Indeed.<br>
          We must be
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Hi!<br>
          My name is Kuzmich, and this is my wife.<br>
          Take this glass to the housemaid, Irina,<br>
          now.<br><br>
          Is it real?<br><br>
          Yes...<br>
          It is.<br>
          It didn't happen in real
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          m'am!, small talk, please,<br>
          but I'^ll try to keep out of it.<br>
          There, you see, there.<br>
          Such a queer, lugubrious,<br>
          horrible fellow this Order of<br>
          the Garter Snake is! I'm
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          has he left me?<br>
          I am too frightened to go to him.<br><br>
          Have you told him that<br>
          my carriage is here?<br><br>
          I have.<br><br>
          That is curious.<br>
          How?<br><br>
          I am afraid he may be jealous; he
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          You're late for work!<br><br>
          Father, have some patience!<br>
          Don't let them irritate me.<br>
          You did a fine job, a very fine job.<br><br>
          You're not angry with me?<br>
          Have you changed your ways?
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Sandy...<br>
          Please let's go to the river...<br><br>
          We'll go.<br>
          There's no use in waiting<br>
          for the horses.<br>
          We shall find the way alone.<br>
          We shall walk alone in the woods<br>
          until we find the riverbank.<br>
          Then
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          It is a long while since<br>
          I was in your house.<br>
          I had an ice-cream for lunch!<br><br>
          What an extraordinary story<br>
          you are going to tell me!<br>
          I am going to eat it and not eat<br>
          anything for the next two
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I was hungry too!<br><br>
          It isn't dinner time yet, is it?<br><br>
          No, but the rehearsal is!<br>
          We are going to rehearse<br>
          for three whole hours,<br>
          and we will have dinner at four.<br><br>
          Thank you
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
    ],
    ru: [
      {
        title: "",
        poem: `
          old man!<br><br>
          What a fresh face!<br>
          He seems to be in a fever.<br>
          He wants to wash his face<br>
          with cold water,<br>
          but the girls wouldn't let him.<br><br>
          Is it Frank?<br>
          Tell me, what is it
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I have something to tell you.<br><br>
          What is it?<br><br>
          I have something to tell you<br>
          that is very important,<br>
          very important.<br>
          There is an old woman in a little<br>
          village on the Danube –<br>
          What is she saying?<br><br>
          my little friend.<br>
          I've been neglecting you.<br><br>
          He ought to come in every day,<br>
          he's got to be in the house.<br>
          .<br>
          .<br><br>
          What an idea!<br>
          We ought to have a shilling in the bank.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Lucy.<br>
          You, you and mommy and daddy.<br><br>
          I am as cold as an iceberg.<br>
          Yasha, have the wine.<br><br>
          Dear friend,<br>
          I am content to be a nobody.<br>
          I have purchased a plot of land
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          “To you too," she said.<br>
          "Let me go."<br><br>
          "Yes," I said, clasping her close.<br><br>
          "How beautiful you are today!"<br><br>
          It's not beautiful, it's just filthy,<br>
          don't you know
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          You're late!<br><br>
          I'm not late.<br>
          It's eight o'clock already.<br><br>
          Then I suppose it's eight already.<br><br>
          Yes, it seems so.<br>
          Is it?<br><br>
          It's eight.<br>
          Ah, well
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'll try to make you happy, but--<br><br>
          That's enough, with your wife.<br>
          I'll call off the trial on Thursday.<br><br>
          You're a fool to say such things,<br>
          but--no.<br>
          You don't understand.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Stop that, please!<br><br>
          Enough, enough!<br>
          We're not playing,<br>
          it's time we got started!<br>
          Or is it...<br>
          is it...<br>
          ?<br><br>
          Let's go to the shop first.<br><br>
          Ah, here they
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Let's go over to the boat.<br>
          May I?<br><br>
          Yes, go.<br><br>
          It's quite cold in here,<br>
          it's quite cold.<br><br>
          It ought to be very cold.<br>
          Let's sit inside.<br>
          Here,
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Undine, are you here?<br><br>
          Yes, actually I was just going to go in,<br>
          but...<br>
          There...<br>
          there...<br><br>
          What are you doing, Platonov?<br><br>
          I should like to tell you myself, if
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          What time is it?<br><br>
          Five minutes.<br><br>
          Two minutes.<br>
          You are quite exhausted.<br><br>
          I am.<br><br>
          You have worked so hard today.<br>
          You have tasted so much good food.<br>
          Please, let us drink some cold
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
        This is embarrassing…<br><br>
        Guilt, too, my friends!<br>
        We have not been so filthy<br>
        since the war.<br><br>
        We all miss the war, and a man may be forgiven<br>
        for thinking he has lived without the past,<br>
        but let
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          uncle!<br><br>
          What's the matter?<br><br>
          I--I'm so embarrassed.<br>
          Uncle, uncle,<br>
          what's the matter with you?<br>
          Why are you so cold?<br>
          I've kept my lips shut for so long,<br>
          I've wanted to
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          My name is Vinogradov,<br>
          and I am a Civil Engineer.<br>
          I am sorry to have to come to you,<br>
          Margit.<br><br>
          Oh, I am so glad you did.<br>
          Tell them to come in at once.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I know it must seem strange, but...<br>
          forgive me for saying so… I have <br>
          committed a heinous sin,<br>
          and must live with this shame forever.<br>
          I am a failure…<br><br>
          And I have killed many a good man…<br><br>
          Really
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          So what?<br>
          Do you want to know?<br>
          I did not do it.<br><br>
          I've told you everything,<br>
          I'm tired of you.<br>
          Oh, Catherine, Catherine,<br>
          what is she thinking of now?<br><br>
          Tell me,
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          can I help you?<br>
          I've lost all my money.<br><br>
          How's the horse?<br>
          Is he all right?<br><br>
          Yes, he's all right.<br><br>
          What happened to the others?<br>
          Where did they all go?
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Please.<br>
          All of you...please...<br><br>
          I...<br>
          Where am I?<br>
          Where am I?<br>
          Jerusalem...it's in the air!<br><br>
          I can't.<br>
          I feel as if my soul is floating
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          can I borrow your coat?<br><br>
          No,<br>
          I shan't let you put it on till supper.<br><br>
          Oh, oh, oh!<br>
          How cruel you are!<br><br>
          Stop it!<br>
          You're getting on my nerves!
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm home.<br>
          I had a short holiday.<br>
          ..."<br><br>
          "A short holiday?"<br><br>
          "Well, look at him now: a cripple, with<br>
          bad feet, walking and talking,<br>
          and a tray of porridge for lunch!"
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          evil ones, you should keep your<br>
          distance from each other,<br>
          for our present state of things<br>
          have become intolerable.<br>
          I am becoming quite ill at<br>
          the thought of it all.<br><br>
          What nonsense is this, nonsense!<br>
          What noble tradition is this, what
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          all!<br><br>
          Yes,<br>
          we have the river flowing<br>
          right through here!<br><br>
          My dear, precious treasure, good-bye!<br><br>
          What are you reading now?<br><br>
          The best of Russian literature,<br>
          a wonderful author,<br>
          a Russian of
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          to you, sweetheart." I've had a rough time lately, and theoretically<br>
          I could be released from my vow of silence, and finally forgiven,<br>
          and allowed to live a normal life.<br>
          But what should I do?<br>
          What, for instance
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Come, let's go into the forest!<br>
          We haven't had any quiet since morning.<br><br>
          You said you'd be back in an hour.<br>
          Have I the right to tell you so?<br><br>
          You do?<br>
          Oh, you're awfully
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm going to spend the night here!<br><br>
          Yes, yes, spend the night here.<br>
          It's a fine place to live,<br>
          and the servants are all<br>
          in the best of health.<br>
          But your health is so bad!
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          makes my stomach turn.<br><br>
          He fell on hard times.<br>
          We are not here to condemn him,<br>
          but we are happy that in his<br>
          case we have been heard.<br>
          When a man defaults he always retires into<br>
          himself; he cannot touch the ground
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Yang!<br><br>
          To hell with her!<br>
          Oh, my sweet child!<br><br>
          Are you well?<br><br>
          I'm just fine, thank you.<br><br>
          You'd better rest, Nicholas.<br>
          He's got cold.<br><br>
          Yes
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          you, I've got to go!<br><br>
          Don't go,<br>
          we'll find a seat for<br>
          you somewhere else.<br><br>
          Thank you.<br><br>
          I've forgotten.<br>
          Shall I leave now?<br><br>
          No, why not?<br><br>
          What
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Hiroto-san!<br><br>
          Where have you been?<br>
          Who is there after us?<br><br>
          I do not know.<br>
          I am so bored!<br>
          I spend all my time and attention in thinking<br>
          up ways to get Buffon to come
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          brother!<br><br>
          What is it, Papa?<br><br>
          I was pondering it, and came to the conclusion that we should<br>
          all be slaves if it weren't for my beloved pet parrot,<br>
          Whiskers.<br><br>
          What a wonderful
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          everybody!<br>
          How's it going?<br>
          Dad's back with milk and jam,<br>
          how's your health?<br><br>
          Fine.<br><br>
          What's the matter with you, darling?<br><br>
          My soul is delighted and full of life.<br>
          My soul
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Fang Yezi!<br><br>
          The grocery store…?<br>
          It's closed!<br><br>
          It's broken into!<br>
          We can't come in!<br><br>
          We've got to go to the grocery store!<br><br>
          Gone to the grocery store
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          No.<br><br>
          Aunty, can I have some jam with you?<br><br>
          Not for that.<br><br>
          What is it?<br><br>
          The doctor has pushed his<br>
          box over to the right,<br>
          and it is now getting light
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          What is it?<br>
          Is it Marian's birthday present time?<br><br>
          A present for her.<br>
          It's a little red velvet trunk<br>
          with a red rose on it.<br><br>
          What's that?<br><br>
          A present for her.<br>
          Her illness
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          let me kiss them softly!<br>
          ...What is the matter with you?<br>
          -What d'you say?<br>
          -Yes,<br>
          I am always angry with myself and always<br>
          feel that I am not quite myself.<br>
          I am incredibly unhappy.<br>
          Why is this?
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          love, I'm going away now, oh my God<br><br>
          You're going away now, soon.<br><br>
          When will it be, long day, or short one,<br>
          dear?<br><br>
          Short one, dear.<br>
          You never know.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I sure do loved you !<br>
          you've changed so much in two years that<br>
          I can't put myself in your place.<br>
          I left school at fifteen, and since<br>
          then I've thrown myself into work,<br>
          and have worked eighteen<br>
          hours a day — eighteen
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm so happy to have found you<br>
          everywhere in the town!<br><br>
          How lovely you are!<br>
          How beautiful!<br>
          You're so kind!<br>
          Thank you for everything,<br>
          for everything!<br>
          Forgive me,<br>
          I forget my manners--thank you for
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          my dearest...<br>
          I shall be damned if I let you down.<br>
          Forgive me, forgive me...<br>
          forgive me...<br>
          forgive me!<br><br>
          Don't, Angela,<br>
          I don't want to hear any more!<br><br>
          What is it,
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          To my home I come from!<br>
          Hello, Katerina Ponomareva!<br><br>
          "I shall go on foot to the river." That is what the women<br>
          of Kirov want: a man of honour, some responsibility,<br>
          a
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          That's only half the story!<br>
          You came to town on business,<br>
          but I didn't.<br>
          Whoever you are, you are irritating!<br><br>
          One of the sisters of<br>
          the First Consulate--<br><br>
          Certainly.<br><br>
          I
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm late.<br><br>
          I'm afraid we ran off the rope<br>
          while dressing just now.<br><br>
          What rope?<br><br>
          That twine that's tied to the tree.<br><br>
          I was telling Martha about that<br>
          old log that felled some
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          little lamia,<br>
          why are you so moody this evening?<br>
          why do you cry so?<br>
          it could just be the weather...<br><br>
          ...What are you crying for?<br>
          for wha t?<br><br>
          for wha t?<br>
          nya
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Take your luggage off...<br><br>
          No, I want to stay!<br>
          Where is my cigar?<br><br>
          Here it is in the palm of my hand.<br>
          I smoke it every day.<br>
          It is pleasant to smoke.<br><br>
          What is
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          from home.<br>
          .<br>
          .<br>
          .<br>
          My wife is just the same.<br><br>
          She is coming?<br>
          Is that you, Natasha?<br><br>
          Yes, darling.<br>
          Let me tell you how I feel, how I am!<br>
          A cold sweat goes down my spine
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          What time is it?<br><br>
          An hour ago.<br><br>
          An hour ago!<br>
          And now it is nearly dawn.<br>
          Who knows what the weather<br>
          will be like tomorrow.<br>
          We must go.<br><br>
          What delightful views!<br>
          In the evening light the
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Please offer me something to drink,<br>
          Father.<br>
          I'm freezing...<br>
          Father...<br>
          I'm cold...<br>
          I'm cold...<br>
          let me stay here here...<br><br>
          Excuse me, Miss Masha, but I'm freezing,<br>
          too...
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Saul.<br><br>
          There's an owl!<br>
          Eh?<br>
          What a coincidence!<br><br>
          What a coincidence, too!<br>
          It wasn't my doing.<br>
          Is that you, Peter?<br><br>
          It is I!<br>
          I've taken off my coat!<br>
          Aren
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          It's about time!<br>
          My, my, we all have short temperes.<br>
          Are you asleep, Katie?<br><br>
          Yes, sir.<br><br>
          Your eyes look as if you were asleep.<br><br>
          Yes, sir.<br><br>
          You
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          and good morning…and to-morrow morning,<br>
          righteously…<br><br>
          You<<br><br>
          Surely you shouldn't say<br>
          anything like that!<br>
          You<<br><br>
          I'll be quiet, Misha.<br><br>
          I didn't find the body
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Do you know where you are?<br><br>
          Where?<br>
          Where?!<br><br>
          In the peasant's hole!<br>
          Ah,<br>
          where would we be without each other!<br>
          Come, my darling, come!<br>
          Let me hold you!<br><br>
          My arms are
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Birobidz-vanadu, do come!<br>
          It is time!<br>
          Come, humbug!<br>
          ...Oh, I don't see the real me any more.<br>
          They have been feeding me ever<br>
          since I have come here,<br>
          and as
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          is Mr.<br>
          Paltchnik."<br><br>
          "Yes."<br><br>
          "I am so happy to see you!"<br><br>
          "Very happy indeed," I answered,<br>
          "and so sad, too,<br>
          to see you go now.<br>
          Please don't
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          does this mean...<br><br>
          To every cat that walks on two legs there<br>
          is one there who needs to be fed.<br>
          He is exhausted from his long journey.<br><br>
          Then you are tired already,<br>
          Ivan Romanovitch.<br><br>
          I don
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          ma, you're so tired today!" ...<br>
          A woman with a sunflower in her hand cries<br>
          out to a shop-girl for directions.<br>
          "Go and tell the shop-girl<br>
          to go for Sympathy!"<br><br>
          One can understand her
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          did you hear?<br>
          That man is a Russian.<br><br>
          What's the matter with me?<br>
          My head's about to explode.<br>
          Those red eyes....<br>
          Man, when I reach thirty...<br>
          I'll marry a rich man,<br>
          you understand....
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          is this the office on which you work?<br>
          No; I went to dinner at my sister's.<br><br>
          To-morrow we'll go away.<br><br>
          Good-bye.<br>
          I've no anxiety about you;<br>
          you're a free man
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Max.<br><br>
          Do you remember how we used to play this terrible<br>
          flute-partie when we used to live here?<br><br>
          I don't!<br>
          I don't!<br><br>
          Oh, poor girl, oh, wretch!
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I am here; thank you!<br><br>
          Vanya, my dear,<br>
          you have done me justice; I have never in my life heard<br>
          such an exclamation befitting your character!<br><br>
          You are still a virgin, doctor.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          little mortal.<br>
          Good-bye.<br><br>
          The engineer brought me<br>
          a package from Moscow!<br>
          What a coincidence!<br><br>
          A package?<br>
          From Moscow?<br>
          How strange!<br>
          Red in the middle!<br><br>
          It's a present for you, little
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          is Olga.<br>
          I am very happy to see you!<br><br>
          What do you mean by this happiness?<br><br>
          Your mother says that you have been<br>
          lying ill ever since you came here,<br>
          and that you have even<br>
          been afraid to go to
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          to the Peruvians,<br><br>
          I'm in love,<br>
          I've been in love for fifty years now!<br><br>
          For fifty years!<br>
          And why?<br>
          Because you people live like animals, never<br>
          content with the earth you inhabit,<br>
          you work without
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Now that they've found me,<br>
          how can I get them to<br>
          give me back my coat?<br>
          I can go on my way,<br>
          but they can't take me away.<br>
          They won't understand me.<br><br>
          You're too kind...<br>
          Please,
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          You must come to a decision<br>
          about this myself,<br>
          or else I shall dismiss you.<br><br>
          Well?<br>
          And what about it?<br><br>
          And this and the following, please.<br><br>
          Agreed?<br>
          The rent hasn't gone
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          The noise was terrible."<br><br>
          Yes, they had gone away early to-day,<br>
          and we hardly knew each<br>
          other from the other!<br>
          I shed a tear or two, too.<br>
          I know not when we shall meet again.<br><br>
          "
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          the doctor!<br>
          He was going to come in, he<br>
          said he wanted to see me,<br>
          he wanted to speak to me.<br>
          My name is—I don't know what you want,<br>
          really—Marshall!<br><br>
          Oh, my name is
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I sure am full of pleasure<br>
          when I am on my feet!<br><br>
          It's summer now,<br>
          but I'm afraid the temperature<br>
          will drop further...<br>
          It's summer now,<br>
          but I'm afraid the temperature<br>
          will drop further...<br>
          It's summer
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          What are you doing here?<br><br>
          A stroll in the fields.<br><br>
          I know you're not.<br>
          Why are you running about here?<br><br>
          I feel like going swimming.<br><br>
          It's nothing.<br>
          Don't feel guilty
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          It's all right.<br>
          Back in the hotel room, with<br>
          the fire, the cold,<br>
          and the noise....<br>
          But the piano doesn't seem to mind.<br><br>
          What did the Baron do?<br><br>
          He stood on Napoleon's grave in
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          He's asleep.<br><br>
          I don't know what he's doing,<br>
          he's been asleep a long time……<br><br>
          Shall I get him some tea,<br>
          he'll be very tired.<br><br>
          He's really a silly fellow
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          to you too, t'other day!<br>
          <Shakes head.<br><br>
          Where?<br><br>
          Here, listen here,<br>
          I've been sleeping all night in the library because my brother<br>
          Sebastien and I couldn't get into the court garden; we
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          God, what a frightful noise it made!<br>
          <exits,<br>
          turns to see what the matter<br>
          is while > What is it?<br><br>
          What is it?<br><br>
          Just turn and look at me, Nicolas.<br><br>
          The devil forbid
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I don't know what to do!<br>
          I don't know whom to talk to!<br><br>
          She treated me with great dignity!<br><br>
          Why do you come to me?<br><br>
          I have been wanting to<br>
          talk to you all night.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          the best of luck on your voyage<br><br>
          To think that I am only<br>
          forty-seven years old!<br>
          I have been with you from the<br>
          first day I laid eyes on you.<br>
          I have carried your clothes<br>
          and your luggage.<br>
          We have loved and hated
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Yes, sir.<br><br>
          My name is Sergei,<br>
          I am a lieutenant in the 105th<br>
          Mechanized Rifle Battalion.<br>
          I am on leave and not yet<br>
          entitled to pension,<br>
          but I ask you to forgive my silence.<br>
          I thank you
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm not going to school today.<br><br>
          It's dreadful, you know, it's dreadful.<br>
          He blinked.<br><br>
          Who's there?<br><br>
          It's my wife.<br><br>
          Don't laugh, I laughed before.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm going to leave our<br>
          apartment to-morrow.<br>
          I have a lot of things to take care of,<br>
          you can imagine.<br>
          I've finished the picture that Lydia promised to make<br>
          for me and now I have to look after her archives.<br>
          I
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          this is Jiri, she's the receptionist"<br><br>
          It's you, it's me.<br>
          What are you looking at?<br><br>
          It's Athanasius, he's coming.<br>
          I've got to go now, I can't
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Oh, then it's done.<br><br>
          Thanks to you I don't feel<br>
          like kissing you anymore.<br><br>
          You're my husband, my hero, I love<br>
          you, all of you, my whole being,<br>
          is devoted to you.<br>
          I
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          asking for helpurgentlyto repair the damage<br>
          done to our estate yesterday evening William .<br><br>
          Oh, how I long to go to Tvverka!<br>
          I am at last going to visit the dear<br>
          old house in the forest with my
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Auntie Masha!<br>
          How are you, Owen?<br><br>
          My life is over.<br><br>
          Yes, very.<br>
          And dear--Isn't it wonderful how,<br>
          with the passing of years,<br>
          our conceptions of life grow<br>
          lighter and lighter?
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Thank you for coming.<br><br>
          Yes, I found it wonderful.<br><br>
          How is the school going?<br>
          Are you well?<br><br>
          I am well.<br><br>
          And you survived the fall of Tula?<br><br>
          Yes.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          do tell me the time.<br>
          I shall be in a hurry.<br><br>
          Oh, how quickly time flies!<br><br>
          Who knows?<br>
          Perhaps you shall hear of<br>
          it a long time later.<br><br>
          Well, well!<br>
          Well, well!
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Oh my dear friend, my beloved!<br><br>
          Oh, what a life!<br>
          Everything is new before our eyes.<br>
          Why do you look so sad?<br>
          This is not the time to be sad.<br>
          Take me to you?<br><br>
          You go now
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          uen s'est bien comme lui,<br>
          il me semble un h muettei !<br><br>
          Vivet !<br>
          voilà !<br><br>
          I am certainly glad to find<br>
          myself in this town!<br>
          Heavens, I
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          The well is running dry.<br>
          Will you get the baby out?<br><br>
          Here he is.<br><br>
          And here's a bottle of tubers.<br><br>
          And wherein?<br><br>
          The fleas have been checked.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          George.<br>
          .<br>
          .<br>
          .<br><br>
          To my son.<br>
          .<br>
          .<br>
          .<br>
          I'll go.<br>
          Good-bye.<br>
          I love you.<br>
          I go to sleep at night.<br><br>
          To the office.<br>
          .<br>
          .<br>
          .<br>
          I'm a fool
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          How are you, Sasha?<br>
          The weather's so beautiful to-day!<br>
          What's the matter with you?<br>
          Why are you so pale?<br><br>
          I'm irritable all the afternoon,<br>
          and I never slept either.<br><br>
          Do you like
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Yes, it's all right!<br><br>
          I'm just the same as always!<br>
          I have the same little girlfriend!<br><br>
          I know just the girl!<br><br>
          For heaven's sake, Georgi,<br>
          give her something to
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          have a nice day.<br><br>
          How is your health, cousin?<br><br>
          Fine, thanks to your imbibing.<br><br>
          Ivan Romanovitch, dear!<br><br>
          Steinbach!<br><br>
          What do you want?
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          How pale you look!<br><br>
          It's nice here, isn't it?<br><br>
          Yes, it is.<br>
          You're not cold, are you?<br><br>
          No,<br>
          I'm much better now; I feel<br>
          as if I'd reached my
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          O mage!<br>
          My name is Osiris lives in the north,<br>
          he and his wife have two daughters:<br><br>
          You are my sister.<br><br><br>
          A-oo!<br><br>
          O Mum!<br><br>
          Please, please, let me go to
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          He stands up and walks off]<br><br>
          How are those fellows?<br>
          Killed each other's dogs.<br>
          How miserable, how pitiful, how strange,<br>
          how mental.<br>
          I love you Rosavela.<br>
          [She extends her hand to greet him
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          can I help you?<br>
          You've come to give me a kiss.<br>
          Thank you.<br><br>
          What is it?<br><br>
          Please don't, it's just a simple<br>
          'Mama, papa, eat, sleep,<br>
          whatever' kiss
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          are you?<br><br>
          Yes, my name is Agnieszka Gerasimich,<br>
          I am a teacher in the<br>
          local primary school.<br><br>
          Where are you from?<br><br>
          The same as you.<br><br>
          So you are a
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Ah--ha--<br><br>
          You liked Maximov when<br><br>
          He pleased me!<br>
          I liked him<br><br>
          You should have seen the happiness under<br><br>
          His airs frightened me.<br>
          I thought he was going<br>
          to be a great actor.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          This way!<br>
          Help!<br>
          Help!<br><br>
          Fool!<br>
          A skeptic cannot believe anything.<br><br>
          Heavens!<br>
          What a state of things!<br>
          Take me with you!<br>
          I'm short!<br>
          I'm little!<br>
          I'm loved
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm home!<br>
          <Cheers from the study!<br>
          And he comes into the sitting-room,<br>
          followed immediately by POFFEE-CUP,<br>
          by THE DOCTOR and BIRD!<br><br>
          What are you doing here?<br><br>
          Home
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I—I must be outside—"<br><br>
          The Russians are coming.<br><br>
          We are all inside.<br>
          The whole town is standing still.<br>
          It seems to me as if the whole of creation were<br>
          rolling down a dark pit into it; then suddenly
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Is my sister here?<br><br>
          Yes, she's here.<br><br>
          What delightful weather!<br>
          You ought to come out and have a look,<br>
          it's quite charming.<br><br>
          Yes, yes, it's quite lovely,<br>
          I've been here
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Octavian!<br>
          Today's lunch...<br>
          put it in the fridge.<br><br>
          Oh, shut the door, you foul phantoms!<br><br>
          I didn't see a thing!<br><br>
          ...And today we celebrate the Olympics,<br>
          and how
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          learn to listen to my voice!<br><br>
          I am unhappy, I assure you, my dear,<br>
          unhappy woman!<br>
          Why does the afternoon sunlight shine<br>
          so brightly in the garden?<br>
          And why do those dancing leaves<br>
          look so tenderly at me?<br>
          I
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          to you too, master!<br><br>
          This city is small,<br>
          it is warm and I don't like it.<br>
          I'm going away.<br><br>
          You're coming again?<br><br>
          We'll see.<br><br>
          Why?<br><br>
          I never told
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          you...you...<br><br>
          ...Is Sasha dead...or is she alive?<br><br>
          It is impossible to say.<br><br>
          It is very difficult, my dear friend,<br>
          but I shall try...And my watch<br>
          won't be broken...I
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          that old zap-fist of mine!<br><br>
          Stop that,<br>
          that's not what I meant to-day.<br><br>
          Wait.<br><br>
          We're not going away.<br>
          Oh, how funny you are.<br>
          I grant you everything you
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          have you got your supper ready?<br><br>
          Yes,<br>
          my stomach aches from before<br>
          the sun goes down.<br>
          Please don't say anything.<br><br>
          You are being too nice to me.<br>
          Tell me, tell me!<br><br>
          I have been
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          You've all gone away,<br>
          yet you're still here.<br>
          Lord, what a clean slate!<br>
          What can you make of it!<br><br>
          I'm a student of music, and I couldn't<br>
          be a less pleased if I had the time,<br>
          and
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          are you sure?<br>
          ...Yes.<br>
          * * * I am absolutely certain...<br>
          I have hung all the traces of my<br>
          non-existence, of eternity,<br>
          in the air.<br>
          * * * With a loud click,<br>
          as if from some locked cupboard
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Your mother, on my honour.<br><br>
          Your father, on mine!<br><br>
          I don't understand, you have<br>
          never beaten your wife,<br>
          have you?<br><br>
          I have.<br><br>
          This is the first time I have beaten
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          and good morning.<br><br>
          No, you really are a gentleman.<br><br>
          Yes, I am.<br><br>
          Where are you going?<br><br>
          I have no idea.<br>
          I am going to the old people's home.<br><br>
          When does
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Alexander.<br><br>
          What's the matter with you?...<br>
          Are you in pain?<br><br>
          N-nothing...<br><br>
          This must be the end.<br>
          I thought we were making peace.<br>
          I knew at once that this was<br>
          not my parting moment
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I am an old friend .<br>
          .<br>
          .<br>
          and accept this contribution as a<br>
          token of my sincere friendship.<br><br>
          You have poisoned the well.<br>
          I will now drink from it.<br><br>
          Not again.<br>
          The moment you begin to talk me
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm late .<br>
          .<br>
          .<br>
          I was going to call at you, Princess,<br>
          to ask for your mother,<br>
          but .<br>
          .<br>
          .<br>
          I went to your mother .<br>
          .<br>
          .<br>
          I saw her .<br>
          .<br>
          .<br>
          outside the gates.<br>
          Outside there is the sound
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Lady Bird!<br><br>
          Good morning, dear.<br>
          There is a lot of playing in the garden,<br>
          I must go to the ball.<br><br>
          Here is some green thyme for your soup,<br>
          it is very good.<br><br>
          Thank you
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Oh, I am happy...<br>
          I am happy...it's only I'm<br>
          not drinking tea...<br><br>
          Masha, my baby!<br><br><br>
          Do you hear that, baby?<br><br>
          Yes!<br><br>
          We have won an important stage!
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          You're late, old chap,<br>
          and I can't bear to stop here.<br><br>
          I'd like to speak to you, your ladyship,<br>
          quite directly.<br>
          I'm tired of listening to you talk,<br>
          and I'm very sorry for
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          name of victim>,<br>
          you should come to-morrow.<br>
          I shall read you a line.<br>
          Be quiet.<br>
          My dear, charming, little soul,<br>
          do not cry.<br>
          Tell me everything in your thoughts.<br>
          I am a beautiful, a wonderful person
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          you don't see the point<br>
          of being a rich man,<br>
          do you?<br>
          ...I cannot meet another man.<br>
          I have left Arabia and Germany.<br>
          Now I live and work in this district,<br>
          in this house.<br>
          Men come and go by day and
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          is this Soprano?<br>
          Oh my heart.<br>
          Five thousand for him!<br><br>
          I am awfully sorry, my darling.<br><br>
          Here he is again.<br>
          Don't say a word.<br><br>
          It would be good for your health,<br>
          my little
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          squat, you two are eating!<br><br>
          Ready, ready?<br>
          Didn't you know?<br>
          You're a good, proud man!<br><br>
          Yes, I suppose I am!<br><br>
          What's your opinion of this restaurant,<br>
          colonel?
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          s strange.<br><br>
          So strange.<br>
          It’s almost nauseating.<br><br>
          The rats!<br>
          They’re gnawing at my apartment!<br>
          They’re gnawing at it,<br>
          no matter how old I am
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm so happy—Why, oh, why?...<br>
          Hmm?<br>
          What's the matter?...<br>
          Papa, is that you, Elizabeth?<br><br>
          Yes.<br><br>
          The doctor came here and told us<br>
          that he had a fit and had to
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Can I come in?<br><br>
          No, it's time to leave.<br>
          You've been here half a year already.<br>
          How dull and dirty this place is!<br><br>
          You're only sixteen.<br>
          What reason have you?<br><br>
          Why, my
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Where are you?<br>
          Sound of car!<br><br>
          There's been a commotion at the hotel.<br>
          Somebody broken in through the window.<br>
          Good-bye for a week!<br><br>
          How would you like to die, my
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Marina!<br><br>
          Good evening, everybody.<br>
          I am here on business and<br><br>
          When the furniture was<br>
          being put in last year<br><br>
          I am here on business.<br><br>
          You are late.<br><br>
          On business.<br><br>
          Yes
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Did you hear?<br>
          Wasn't it the beauty of her face?<br>
          And the way she smiled, her eyes, the way she walked, it was strangely<br>
          beautiful, I thought, that smile never left my lips,<br>
          that eye never left my brow
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          If only I could save you...If only...If<br>
          only I could save you!<br><br>
          Who is here?<br><br>
          I, Nikolai Ivanich!<br>
          Nikolai Ivanich!<br>
          What are you doing here?<br>
          Who are you?
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          What are you doing here?<br><br>
          I came to ask you if you knew where<br>
          we can find your mother.<br><br>
          Where?<br><br>
          And why?<br><br>
          I came to ask if you knew where<br>
          my mother is; I am in
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Why, you mean to say—"<br><br>
          I am not making a real speech.<br>
          I am only repeating what the lackeys<br>
          have said to me for seven years.<br>
          They have all gone on getting<br>
          rich, as you see,<br>
          without
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          John, how's your girl?<br><br>
          Good, very good.<br><br>
          She came in with me this morning.<br><br>
          That means it's time for her to<br>
          get ready to go to school.<br>
          She's a school girl, that
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          is my father.<br>
          I have been away a long time.<br>
          .<br>
          .<br>
          .<br>
          Where are the others?<br>
          Where is Emma?<br>
          Ilya ?""I am well.<br>
          .<br>
          .<br>
          .<br>
          All is over .<br>
          .<br>
          ."<br><br>
          Father, mother, this
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          How are you?<br>
          All's well!<br><br>
          Yes, of course.<br><br>
          Good morning, everybody!<br><br>
          What brings you to this place?<br><br>
          I have come to say good-bye.<br><br>
          How are you, my
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm going home...<br>
          you alone will go...<br>
          sooner or later, you two must give<br>
          up hope, stop loving each other,<br>
          and disappear into the distance...<br><br>
          Misha, you're too noisy!<br>
          You're not nice, you
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          and how I love you, oh, how I love you.<br>
          …I love you so much, I<br>
          forget who you are,<br>
          I love you more than I can imagine.<br>
          …I am lost forever, lost forever.<br><br>
          Shall I go
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          cousin!<br>
          Your clock strikes eleven!<br>
          Oh, can you imagine that, for just one moment,<br>
          all day you have been scrubbing and scrubbing,<br>
          and yet this minute nothing has changed!<br><br>
          Really, cousin,<br>
          this is absolutely incredible!
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Dear Madame,<br>
          how dreary your life must be!<br>
          You love nothing but money, and when you begin<br>
          to suffer you cry, "Oh, how I hate myself,<br>
          how I hate myself!" And I know<br>
          that I am not making this
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Why don't you sleep on the floor?<br><br>
          I can't.<br>
          I'm crying.<br>
          And you, Sergei!<br>
          Wake up!<br><br>
          I'm going.<br>
          There's nothing else to say.<br><br>
          Oh, Lord!
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I had forgotten Joseph!<br><br>
          I'm not here to see Joseph,<br>
          it's time for you to go.<br><br>
          I'm afraid I might injure myself,<br>
          so I came here to you.<br><br>
          Why do you do that, Alex
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Sophy?<br><br>
          Yes?<br><br>
          Oh, how I should like to be seated!<br>
          Oh, Ilya,<br>
          how I should like to be seated!<br><br>
          Sofya Yegorovna, please.<br><br>
          The
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          endoftext|>There are thousands of<br>
          different strains of cannabis,<br>
          and each one has unique medicinal<br>
          and therapeutic uses.<br>
          The difficulty is that no one<br>
          can agree on a safe dosage.<br><br>
          My daughter was born almost<br>
          seven years ago,<br>
          and so far she hasn
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Talia!"<br><br>
          It's all right, Misha.<br><br>
          I've come to say good-bye.<br>
          Is it you, Leonid?<br>
          Good-bye!<br><br>
          I don't know when I was<br>
          born or when I stopped
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          how is the fire?<br>
          Yes, it is burning so.<br><br>
          Good.<br>
          You have burnt the rubbish<br>
          from your daughter's room.<br><br>
          How?<br><br>
          Is Rudolf here yet?<br>
          He has not been inside for a long time.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          my good friend....<br><br>
          Sleep well, your ladyship.<br><br>
          You're tired, you're hot,<br>
          no matter what you do.<br>
          Life is hard, your ladyship.<br><br>
          Off I go, to the South Pole
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Mother.<br><br>
          This is Sylvia.<br><br>
          I know how you feel.<br>
          I know.<br><br>
          All right, all right.<br>
          Now we'll go.<br>
          I've had enough, I've had it, I'm going.<br>
          You understand
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Sir, it's you!<br><br>
          Yes…I'm here, Olga.<br>
          I'm here!<br><br>
          Really…I've been waiting a<br>
          long time for this day!<br>
          And it's finally here!<br>
          …I'm so happy
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          it is I!<br>
          With joy, I set off for Trenčín!<br><br>
          I heard him on the tram.<br><br>
          He is here.<br><br>
          Is it the same one you<br>
          used to see every day?<br>
          And your face?
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          if you knew what that meant.<br>
          You shouldn't cry.<br><br>
          It's quite alright.<br><br>
          And what else?<br>
          And what about dinner?<br><br>
          I eat like this all the time.<br><br>
          Excellent.<br>
          You must give your
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          You like this because...<br>
          this is...<br>
          this is how it is...<br><br>
          When will the gentlemen go home?<br><br>
          They are to follow them home.<br><br>
          Come, let us go.<br><br>
          It is time for me to go.
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          to you, dear girl,<br>
          for the first time in a long time!<br><br>
          It's all the same to me, I can't move.<br>
          They're forcing me to come,<br>
          they really want to.<br>
          The idea of my happiness must either
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          you, Red Riding Hood!<br><br>
          To tell you the truth,<br>
          I've nothing better to do than now.<br>
          Everyone around here is busy, the Colonel<br>
          is here, all kinds of people come,<br>
          and when I go out into the street I feel
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          We are here too.<br><br>
          Then we could sleep here.<br><br>
          I think that would be very nice.<br><br>
          It would be nice if it were not so cold.<br><br>
          It must be so cold for three months in
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I'm not pleased !"<br><br>
          "Oh my gosh,<br>
          she's brought us two poverty to-day!<br>
          Isn't she a noble soul?<br>
          I asked her to tea yesterday,<br>
          and I didn't get the impression
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          is my cute little cosmonaut!" The three of them sat together<br>
          in her living-room, beside her sewing chair,<br>
          her lady-key in her hand.<br><br>
          I suppose we are going on holiday?<br><br>
          Indeed.<br>
          We must be
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Hi!<br>
          My name is Kuzmich, and this is my wife.<br>
          Take this glass to the housemaid, Irina,<br>
          now.<br><br>
          Is it real?<br><br>
          Yes...<br>
          It is.<br>
          It didn't happen in real
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          m'am!, small talk, please,<br>
          but I'^ll try to keep out of it.<br>
          There, you see, there.<br>
          Such a queer, lugubrious,<br>
          horrible fellow this Order of<br>
          the Garter Snake is! I'm
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          has he left me?<br>
          I am too frightened to go to him.<br><br>
          Have you told him that<br>
          my carriage is here?<br><br>
          I have.<br><br>
          That is curious.<br>
          How?<br><br>
          I am afraid he may be jealous; he
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          You're late for work!<br><br>
          Father, have some patience!<br>
          Don't let them irritate me.<br>
          You did a fine job, a very fine job.<br><br>
          You're not angry with me?<br>
          Have you changed your ways?
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          Sandy...<br>
          Please let's go to the river...<br><br>
          We'll go.<br>
          There's no use in waiting<br>
          for the horses.<br>
          We shall find the way alone.<br>
          We shall walk alone in the woods<br>
          until we find the riverbank.<br>
          Then
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          It is a long while since<br>
          I was in your house.<br>
          I had an ice-cream for lunch!<br><br>
          What an extraordinary story<br>
          you are going to tell me!<br>
          I am going to eat it and not eat<br>
          anything for the next two
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
      {
        title: "",
        poem: `
          I was hungry too!<br><br>
          It isn't dinner time yet, is it?<br><br>
          No, but the rehearsal is!<br>
          We are going to rehearse<br>
          for three whole hours,<br>
          and we will have dinner at four.<br><br>
          Thank you
        `,
        author: '<span class="bold">A.I. Ivan Romanovitch.</span> <span class="italic print-text-12">Luulepank, 2021</span>',
      },
    ],
  },
  5: { // New Work
    et: [
      {
        title: '<span class="bold">Luule</span>',
        poem: `
          siin sa seisad<br>
          vaene klient<br>
          ootamas mis siit tuleb<br>
          raha ei tule<br>
          seda kindlasti mitte<br>
          ju oled juba aru saanud<br>
          ainuke asi<br>
          mis siit tuleb<br>
          on sihuke lõpmatu<br>
          irvitamine<br>
          mille eest isegi õlut<br>
          ei osta
        `,
        author: '<span class="bold">P. I. Filimonov.</span> <span class="italic">Luulepank, september 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: '<span class="bold">Masinate mäss</span>',
        poem: `
          tehisintellekti vastu<br>
          võibolla veel saaks<br>
          tehistunnete vastu aga<br>
          mitte kuidagi<br>
          kui mu tolmuimeja<br>
          kepib su nõudepesemismasinat<br>
          jääb ainult põgeneda
        `,
        author: '<span class="bold">P. I. Filimonov.</span> <span class="italic">Luulepank, september 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: '<span class="bold">Tulevik</span>',
        poem: `
          kunagi tulevikus<br>
          on võimalik<br>
          kanda uutele seadmetele üle<br>
          vanast nuputelefonist<br>
          kõik need ammu unustatud sõnumid<br>
          mind maha jätnud naistest<br>
          ning korraga üle lugeda<br>
          otsida jaühe kaupa
        `,
        author: '<span class="bold">P. I. Filimonov.</span> <span class="italic">Luulepank, september 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: '<span class="bold">ADA</span>',
        poem: `
        aastal 1833 teismeline tüdruk nimega ada<br>
        lovelace saab sõbraks masinaga juba natuke<br>
        aega hiljem loob ada aga juba ise miski mida<br>
        nii umbes sada aastat hiljem hakatakse<br>
        kutsuma arvuti programmeerimiseks muide<br>
        ada teadis et ta on oma ajast ees et ta on ühe<br>
        võimaliku tuleviku prohvetess ta teadis et<br>
        tema ja tema mõtlemine kuuluvad tulevikku<br>
        ada ei olnud oma aja kangelane ei rohkem<br>
        nagu oma aja pantvang tulnukas tulevikust<br>
        iga kord kui tunned end mittemõistetu ja<br>
        üksikuna mõtle ada peale on üpris tõenäoline<br>
        et võrreldes adaga on sul kõik täitsa OKEI
        `,
        author: '<span class="bold">Sveta Grigorjeva.</span> <span class="italic">Luulepank, november 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          Kui ilus on õhtu,<br>
          mis laotub üle puude, tänavate, linna –<br>
          ta torgib natuke ja avaneb siis nagu sile tume<br>
          kastanimuna rohelise koore sees.<br>
          Tõmbab joone üle su lauba.<br>
          Sellest saab piir.<br><br>
          Ja sa vaatad mind<br>
          oma väga tundlikust nahast skafandris,<br>
          mille öö eimiski riputab<br>
          trotsliku taeva alla tuulduma,<br>
          kuni tuleviku toorus ta viimaks kustutab.
        `,
        author: '<span class="bold">Carolina Pihelgas.</span> <span class="italic">Luulepank, oktoober 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          oi, jälle tegin yhe sammuuuuuuuuuuuuuuuuuuuuuuu<br>
          olemise valgele väljakuleeeeeeeeeeeeeeeeeeeeeeeeee<br>
          kurat, jälle tegin ajaluguuuuuuuuuuuuuuuuuuuuuuuu<br>
          uuuuuuuuuuu jälle tegin seda kuradiiiiiiiiiiiiiiiiiiiiiiii<br>
          ajaluguuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu<br>
          uuuuuuuuuuuuuuuuuuu… uuuuuuuuuuu<br>
          uuuuuuu uhuuuu uhuhuu<br>
          uuuhhh<br>
          oeh
        `,
        author: '<span class="bold">Reijo Roos.</span> <span class="italic">Luulepank, oktoober 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          käsi<br>
          mulle<br>
          kätte<br><br>
          palun näita mulle hoovusi, ma<br>
          näitan sulle lumetorme<br>
          olen näinud piisavalt<br>
          näita mulle lume valget<br>
          kylge, soojust palges. mu sõnad<br>
          sosistavad veel midagi,<br>
          ei kuule. tõused minema, ei!<br>
          palun anna oma 
        `,
        author: '<span class="bold">Reijo Roos.</span> <span class="italic">Luulepank, oktoober 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          kirjavahemärgid on<br>
          ha naljakakad<br>
          ha-ha<br>
          kajakad<br>
          majakad<br>
          soome laht<br>
          lahes lahest<br>
          ha-ha, lahe<br>
          oled
        `,
        author: '<span class="bold">Reijo Roos.</span> <span class="italic">Luulepank, oktoober 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          Andromeeda ja Linnutee<br>
          me põkkume – üheks sulame<br>
          nii maksame lõpuks<br>
          oma kosmilise luna<br><br>
          me oleme kaks keerlevat<br>
          tühjusekehastust kaks<br>
          pehastust-lehastust kaduvat<br>
          roiskuvat lagunevat last<br><br>
          me galaktikate kokkusulamine<br>
          ühteheitmine on surm<br>
          anna andeks et ma sulle nii ütlen<br>
          meie armastus on surm<br><br>
          aga tühja kah<br>
          sest ega meil paremat ka põle<br><br>
          kuskilt võtta
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">Luulepank, sügis 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: `
          JUSTNAGU RIIMIS LUULETUS OLEMISE<br>
          TAJUMATUST KERGUSEST AJEE
        `,
        poem: `
          aineedus – me kohtume<br>
          (see on hetk)<br>
          kui mööda söögijuha<br>
          allapoole uhab<br>
          mu tehisintellekt –<br>
          kust lohtu me<br>
          leiame veidiks veel<br>
          enne sõlmumist alt<br>
          veab meid keel<br>
          nii faking kavalal
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">Luulepank, sügis 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          kas see on pask<br>
          et olen susse armund<br><br>
          sa elad teispool parki<br>
          see on lähedal ja nii kaugel<br><br>
          park pannakse ööseks lukku<br>
          me saaksime alati üle tara ronida<br><br>
          arvestades meid pole ma kindel<br>
          kas me ka tagasi ronida jaksaks siis<br><br>
          sest me oleme meie<br>
          sellepärast ongi üüratu vahemaa<br><br>
          minu südamest sinu südamesse<br>
          sinu armastusest minu armastusse<br><br>
          ilus öö lasub Pelguranna kohale<br>
          meie vaikselt iseendas vohame
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">Luulepank, sügis 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "LOLL",
        poem: `
          ma olen alati mõelnud<br>
          et mul on endal veel<br>
          liiga palju õppida<br>
          selleks et teisi õpetada<br>
          siiski olen ma elus tolt<br>
          rajalt mõnigi kord põiganud<br>
          ning püüdnud nii lastele<br>
          kui noortele kui vanadele<br>
          teekaaslastelegi miskit rääkida<br>
          miskit justkui vägatarka<br>
          ja olulist öelda<br>
          pettes võib-olla nii neid<br>
          kui ka ennast: kui tähtis saab<br>
          see väike asi olla<br>
          mis ma õppida olen jõudnud?<br>
          nii mõnedki mu õpetajad on<br>
          juba läind ja surnud<br>
          pääs tiksub Charlie Wattsi antud<br>
          rütmibluusibiit<br>
          ning loen mõnd veidrat värssi jälle<br>
          Tolkien'ilt<br>
          (on siuke hommikune tund<br>
          poolt ööd ei veetnud magades<br>
          vaid nägin ilmsi und)<br>
          ma olen ikka mõeld et üks<br>
          mu parimaid omadusi on see<br>
          et kuitahes palju ma ka ei õpiks<br>
          ei loeks ei püüaks mõista<br>
          tunnen ma end ikka rumalana –<br>
          olen petnud end mõttega<br>
          et see on uudishimu ja avatus<br>
          mis mind noorena hoiab<br>
          ning laseb mul alati olla<br>
          elu õpipoiss –<br>
          ja alles hiljuti on mulle<br>
          hakanud (vaikselt väga<br>
          vaikselt) kohale jõudma<br>
          et tõenäoliselt tähendabki<br>
          see seda et ma olen lihtsalt<br>
          loll – sünnist saati loll<br>
          surmani loll
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">Luulepank, sügis 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "SATORIHETKI",
        poem: `
          <span class="italic">Romeo loved Juliet<br>
          Juliet she felt the same<br>
          When he put his arms around her<br>
          He said Julie, baby, you're my flame</span> 
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">Luulepank, sügis 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          mu kodulaht on udulummuses<br>
          ja ma ei näe iseennast<br>
          läbi selle udu<br>
          kui ma teispool lahte<br>
          bussis istun ja tööle sõidan:<br>
          ma ei näe iseennast<br>
          oma kodus
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">Luulepank, sügis 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          minagi olengi ikka veel lapski<br>
          mus on liiga palju kaasaskantut<br>
          liiga palju etteantut<br>
          ma pole ära adund-jagand<br>
          toda hetke mil<br>
          süütusest saab süüdimatus<br>
          minagi olengi ikka veel lapski<br>
          karvane ja kohutav laps<br>
          kesk elu miiniväju<br>
          oma sõrgadega sõtkumas<br>
          seda sõresooja soppa
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">Luulepank, sügis 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          kui ma teadnuks et me ahi töötab<br>
          algusest pääle kui teadnuks<br>
          kui me korteri üürisime<br>
          siis peremees ei saand seda tööle<br>
          ja meiegi pärast mitte<br>
          ja see jäi nii: see vana ahi see vana olemine<br>
          alles siis kui olid läind sain ta<br>
          põlema meile mõlemile: kui ma teadnuks<br>
          algusest saati et see ahi töötab<br>
          siis me oleks ju ikka koos eks<br>
          siis me armastus kestaks üle aegade<br>
          lihtsalt selle tillukese sinise leegi pärast eks
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">Luulepank, sügis 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          otsin lähedust nagu koer<br>
          nagu kärnane peni poen ma<br>
          elule külje alla – kuigi elu<br>
          pole mind päriselt kunagi<br>
          enda omaks tahtnud
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">Luulepank, sügis 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          RICHARD NIXON<br><br>
          et pisike Tom Waits käis<br>
          samas kirikus<br>
          Richard Nixoniga<br>
          et selles maailmas on<br>
          selliseid kohti –<br>
          nende kohtade nimed ei<br>
          ütle meile suurt midagi<br>
          aga ka meie nimed<br>
          ei ütle lõppeks suurt midagi<br>
          sellele maailmale:<br><br>
          ma olen elu otsa tahtnud<br>
          et mu nimi tähendaks midagi<br><br>
          nagu Hullunud Pilv<br>
          või Paleface<br>
          või Jürgen Rooste<br><br>
          ja et ma käiks samas kirkus<br>
          pisikese Tom Waitsiga<br><br>
          eiei ma ei taha olla<br>
          Richard Nixon<br><br>
          miks peaks keegi tahtma olla<br>
          Richard Nixon<br>
          isegi Richard Nixon<br>
          ei taha lõpuks olla Richard Nixon<br><br>
          aga üldises plaanis:<br>
          kes ei tahaks käia samas kirikus<br>
          pisikese Tom Waitsiga?<br><br>
          see on täpselt vastupidine tunne<br>
          see on see tunne mida ma otsin<br>
          see tunne<br>
          mis ei ole<br><br>
          Richard Nixon
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">Luulepank, sügis 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          soomeugri suurriigi ja -võimu taastulemine:<br>
          vohavad üle ilma soome suguda keeled<br>
          kõlavad meie suguda laulud ja lood<br>
          – lauludest tõuseb uusi ilma<br><br>
          lauludest laulujumala<br>
          jõrinast jumitu jummeli<br><br>
          ja Putin ja Orban tulevad pealinna<br>
          Püha Pekkalinna –<br>
          paljajalu ja kaltsuräbalais tulevad<br>
          ja kahetsevad oma patte<br><br>
          üks tunnistab et ta on tšuud<br>
          ja teine – madrjar<br><br>
          poola katolikutaliban alistub<br>
          vana vaga Väinämöise väele<br><br>
          karupeied peetakse nüüd ka<br>
          pisiulukitele kõikjal<br>
          fäärlased ja gröönlased<br>
          peavad paastuma aasta<br>
          iga tapetud delfiini<br>
          ja vaala kohta<br><br>
          siis kütame ilmale sauna<br>
          sauna saadananahkse ja sõgedasooja<br>
          sauna hingus tõmbab läbi ilmamaa<br>
          puhastab katkust ja kõlvatusest<br><br>
          Vanapaganad tulevad metsadesse tagasi<br>
          libahundiulg on uue ajastu laul<br>
          algab koerakoonlaste aeg<br>
          algab Suure Põhja Aeg<br><br>
          ilus tuisune tali<br>
          Püha Pekkalinna tulede säras
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">Luulepank, sügis 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          Komimaa öö Udmurdimaa öö<br>
          te lõhnate viina järgi<br>
          te linnad lõhnavad nõukogude aja järgi<br>
          Komsomolskaja ja Lenini puiestee nurgal<br>
          ulun oma soomeugri ulgu<br>
          mantlitaskus soe vene viin<br>
          Komimaa öö Udmurdimaa öö<br>
          te võnklevad maakohtaderajad<br>
          ja külavaheteed – ornamendid<br>
          talumajadel voogamas<br>
          puidu ja puhtuse lõhn<br>
          ja viina lõhn leiva lõhn<br>
          igaüks laulab igaüks on šamaan<br>
          Komimaa öö Udmurdimaa öö<br>
          te saate rohkem minuks<br>
          kui need teised nood<br>
          lääne ajaloo pesapaigad<br>
          kus ma oma elus ekslen<br>
          edaspidi – kuhu ma kaon<br>
          kaotan end<br>
          lõpuks olen ma smugrilane Tallinnas<br>
          (ja Helsingis) tuulises mereäärses<br>
          linnas kus nii kerge on elada<br>
          nii kerge on kirjutada luuletusi<br>
          nii kerge on peaaaegu mitte<br>
          olemas olla
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">Luulepank, sügis 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          POOL PIDUSÖÖKI<br><br>
          neid sõpru kellele helistan<br>
          kellega räägin<br>
          hakkab väheks jääma<br>
          ühe käe näpud<br>
          vahel mitte päriselt sedagi<br><br>
          Sokrates va väänik<br>
          aeles ringi nii soldatite<br>
          kui komejantidega<br>
          aga ei lasknud õigupoolest<br>
          kedagi ligi<br><br>
          mina oleks lasknud küll<br>
          oleks armastand küll<br>
          täna üks vana kallim<br>
          naeratas-lehvitas läbi akna<br>
          valus-kurb ja tühi hakkas<br><br>
          külm kohvikuaknaklaas<br><br>
          aga muidugi on alati parem<br>
          olla Sokrates – mitte magada nendega<br>
          kes seda otse loomulikuks peavad<br>
          mitte juua kahasse ja kohustuslikult<br>
          mitte anda alla lollidele<br><br>
          ja mitte jalga lasta
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">Luulepank, sügis 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          BRUTUSBLUES<br><br>
          mõnikord – Brutus – mõnikord<br>
          arvad sa et su<br>
          sõber on su reetnud<br>
          sind on alt veetud<br><br>
          mõnikord Brutus<br>
          on see ehk isegi nii<br><br>
          aga tavaliselt – Brutus – millest<br>
          me räägime: ka sina Brutus<br>
          näed peeglist – sellest valusast ja<br>
          inimesekujulisest<br><br>
          sina ka<br><br>
          ja kas siis hakkabki sul<br>
          alles hale enesest: kas siis<br>
          vaatad sa omaenese näopildiga<br>
          vermitud münte sest<br><br>
          kas siis alles hakkab sul hale<br>
          või paha või kas sa peatud kuulatama<br>
          selleilmahääli: kas on see tõsi<br>
          kas on need kolmkümmend hõbeseeklit<br><br>
          mis löödi mu enese näoga<br>
          ja millel polnud selles devalvatsiooni-<br>
          perioodis lõppeks enam mingit väärtust<br>
          kõik langes – muda laulis lembelaule!<br><br>
          lugesin su kirjast välja etteheite-mõttepeite<br>
          nagu ei saaks mind kuskile kutsuda<br>
          sest ma olen megajoodik-maailmakoodik<br>
          kes tuleb ja rikub kõik ära... aga<br><br>
          mina vedasin oma sõpra alt<br>
          mina ise tulin endale pääle<br>
          mina ise olin Brutus kes arvas<br>
          end olevat caesarisalati kroonijuveeli:<br><br>
          salajane kastmeretsept!<br><br>
          natuke juudanahka<br>
          kübeke lutsiferikiirt<br>
          lokike loki lokkidest<br>
          laps keda ma alla neelata ei suutnud<br><br>
          kronoskronoskronosbrutus<br>
          imeline muutus-absoluutus<br><br>
          ka sina<br>
          sina ka<br>
          sina ka<br>
          mina ka<br><br>
          mina ka<br><br>
          brutaalseim su plaanidest<br>
          ilusaim su kehastusist<br>
          ma ei teadnud et olin end<br>
          süüdi mõistnud enne kui ütlesin<br><br>
          sõna sõber<br><br>
          jah – Brutus – kuule – Brutus<br>
          ütle mulle õigupoolest – Brutus<br>
          mis ja miks see oligi millepärast<br>
          sa end paremaks pidasid<br><br>
          raiudes rohmakaid ridasid<br><br>
          mõnikord – Brutus – arvad sa<br><br>
          et sind on reedetud ja et<br>
          seda tagasi tehes oled sa valmis<br>
          reetma kõik: aga äkki see oligi su võimalus<br><br>
          elu peateelt ainuke väljuv põik<br>
          lõpuks see mis on meeles – üksainus lõik<br><br>
          kas ma saan nüüd lubada et<br>
          ma olen parem – muidugi ma<br>
          saan nüüd kõike lubada: kuuvalgel<br>
          antud vandele Brutus ei murra truudust<br><br>
          sina ka<br>
          ka sina
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">Luulepank, sügis 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          SAPPHO-PAPYRUS<br><br>
          et Sappho on katkendlik<br>
          katkendlikum olen mina veel<br>
          iga armastuse sõna lähetet<br>
          on tegelikult alles poolel teel<br>
          ma tahtsin sind ma tahan sind<br>
          ma ütlen lihtsalt ütlen labast muudu<br>
          mu sisimast on teele läind üks lind<br>
          su südamesse maandub – see on vuduu<br>
          vuduu – mu kivisüda lihaliseks muundu!
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">Luulepank, sügis 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          hommikune Batman minus<br>
          tahab võidelda kogu selle<br>
          Gotham City eest<br><br>
          hommikume Jokker on<br>
          juba oma irvegaasi<br>
          lasknud vallale sellele linnale<br><br>
          keegi ei ole hää<br>
          keegi ei ole hää<br>
          krääksub mu kuratlik käokell<br><br>
          aga peamiselt kõneleb too<br>
          must enesest: kui enda eest<br>
          ei taha enam võidelda<br><br>
          siis tuleb meelde et<br>
          inimesed on ju<br>
          ilusad ja hääd<br><br>
          pese oma näolt see klownilõust<br>
          ning tõmba üll must rüü:<br>
          tumetöntsakas rüütel<br><br>
          nood tänavad ootavad sind<br>
          kassidele on vaja tuua pasteeti<br>
          laste tööd lasuvad sünge virnana laual<br><br>
          see on alles tolle võitluse algus<br>
          (aga miks olen ma siis nii väsinud<br>
          nagu oleksin juba elu otsa võidelnud?)<br><br>
          jää vait ja aja oma latekskostüüm selga!<br>
          su seks ootab sind<br>
          su lahing on alles ees – väike vallatu cis-mees!
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">Luulepank, sügis 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          (isadepäeva eel)<br><br>
          mu nägu meenutab mulle praegu<br>
          peeglist vaadates mingit kahtlast segu<br>
          vanast persekäind Elvisest ja mu isast<br>
          on korraga sellist räpase vanamehe pahelisust<br>
          kilavat silma ja veidrat irvet<br>
          ning samas siukest totrat koerailmet<br>
          leplikku ja allaandlikku mandumist-maandumist<br>
          elavast klassikust poolsurnud klassikuks<br>
          mu näokarvad on nagu mingi<br>
          vikerkaareinimeste laulukoor:<br>
          igaüks ise värvi ja turritab ise suunas<br>
          silmad on ikka hinge peeglid<br>
          selle masinavärgi heeglid: nad on väsind<br>
          ja varsti laguneb kõik koost<br>
          vana lõbustuspargi atraktsioonid<br>
          roostetavad – annavad järele loodusele<br>
          kasvavad vohavasse rohelusse – leppimisse<br>
          novembrist aprillini maalivad<br>
          imeilusaid tondilossitühermuvaateid<br>
          kui kliima muidugi rutemini<br>
          ei soojene – oh lõõma grill! oh<br>
          roisku liha! – on kastmeks korraga<br>
          sel viimsel einel<br>
          egoism ja endaviha<br>
          ja ma olen päral<br>
          – päral sõnast “pära” – teate küll<br>
          see viimane<br>
          tagumine ots – vana rahu ise
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">Luulepank, sügis 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          OLLA PEAAEGU ISA<br><br>
          ma kekslesin kenasti väljul<br>
          harva piiripääl – harva olin näljul<br><br>
          mind ei huvita enam see luule<br>
          see meeletu kogemus<br><br>
          mida ma vahel purjus pääga talletan<br>
          (sõnast ´tall´ – veikot lambalembevärss)<br><br>
          ma tahan lihtsalt kohal olla<br>
          kohal olla iseendas iseendaga<br><br>
          kohal olla kõigi laste jaoks<br>
          keda ma olen saand läbi<br><br>
          metsiku loomu/aliku suguakti<br>
          ja ka nonde kes mulle on kingitud kasvatada<br><br>
          läbi Eesti Vabariigi antud<br>
          töölepingu
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">Luulepank, sügis 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          TUNDMATULE BUSSIREISIKAASLASELE<br><br>
          mu unevõlg on päris karm<br>
          karmim kui mu karmavõlg<br>
          seepärast peagi kohtuda<br>
          võib minu peaga sinu õlg
        `,
        author: '<span class="bold">Jürgen Rooste.</span> <span class="italic">Luulepank, sügis 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          robot nutab<br>
          kuumi ränitilku<br>
          kevad kurat
        `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">Eesti haiku, Luulepank, oktoober 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          kirsiõite<br>
          lõhn on täitsa teine<br>
          digiprindis
        `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">Eesti haiku, Luulepank, oktoober 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          küngas huugab<br>
          silmini servereid<br>
          jahutamas
        `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">Eesti haiku, Luulepank, oktoober 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          pakirobot<br>
          starship pepperoni<br>
          uriseb öös
        `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">Eesti haiku, Luulepank, oktoober 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          robot naerab<br>
          külmi ränitilku<br>
          suvi setuk
        `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">Eesti haiku, Luulepank, oktoober 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          aga fuji<br>
          mäe nõlval ekraanil<br>
          õitseb oder
        `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">Eesti haiku, Luulepank, oktoober 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          kerakala<br>
          nii me elu ongi<br>
          kull või kiri
        `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">Eesti haiku, Luulepank, oktoober 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          masinaga<br>
          armast just on raske <br>
          leiutada
        `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">Eesti haiku, Luulepank, oktoober 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          robot leiab<br>
          reipaid ränikilde<br>
          sügis pagan
        `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">Eesti haiku, Luulepank, oktoober 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          samas jamas<br>
          koos siidpööristega<br>
          inimloomad
        `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">Eesti haiku, Luulepank, oktoober 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          vahet pole<br>
          või kui on on lahe<br>
          rahet sajab
        `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">Eesti haiku, Luulepank, oktoober 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          kuriilidel<br>
          kanaarid kariibid<br>
          üks punk puha
        `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">Eesti haiku, Luulepank, oktoober 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          robot umbes<br>
          tahaks täpset räni<br>
          tali tulvab
        `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">Eesti haiku, Luulepank, oktoober 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          toores kala<br>
          pole mitte kõik mis<br>
          toolitus toob
        `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">Eesti haiku, Luulepank, oktoober 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          kummardame<br>
          teetseremoonia<br>
          ümmardame
        `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">Eesti haiku, Luulepank, oktoober 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          kanapersed<br>
          tõusva päikese maal<br>
          päevalilled
        `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">Eesti haiku, Luulepank, oktoober 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          robot rokib<br>
          maailm tiksub tasa<br>
          päike tõuseb
          `,
        author: '<span class="bold">Karl Martin Sinijärv.</span> <span class="italic">Eesti haiku, Luulepank, oktoober 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
      {
        title: "",
        poem: `
          galaktikad ei koondu enam kärjeks<br>
          teoks ei saa sõna tegu tagajärjeks<br>
          uus maailm tõuseb vana asemele<br>
          suur tiib maandub maailma tasemele<br>
          suur küünis riivab inimkonna palet<br>
          üht pärispattu mitut ellujäämismoodust<br>
          suur särav tiib mis peegeldab suurt valet<br>
          tehisajus kohisevat loodust
        `,
        author: '<span class="bold">Triin Soomets.</span> <span class="italic">Luulepank, november 2021</span><br><span class="print-small-text">*Uudislooming</span>',
      },
    ],
  },
}