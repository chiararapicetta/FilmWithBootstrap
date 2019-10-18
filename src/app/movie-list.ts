import { Movie } from './models/movie.model';

export const MOVIES: Movie[] = [
    {
        id: 1, 
        title: 'Tomb Raider', 
        year: '2001', 
        genre: 'Action', 
        director: 'Simon West', 
        minutes: 120, 
        imgUrl: 'https://cdn.pixabay.com/photo/2016/01/24/23/59/tomb-raider-1159864_960_720.jpg', 
        description: 'La giovane Lara Croft, stanca di vivere lavorando come corriere in bicicletta, decide di abbandonare tutto per andare alla ricerca di suo padre, un avventuriero scomparso su una isola leggendaria del Giappone.', 
        videoUrl: 'https://www.youtube.com/watch?v=1-qqQc2ZmuU'
    },
    {
        id: 2, 
        title: 'Avengers: Infinity war', 
        year: '2018', 
        genre: 'Fantasy', 
        director: 'Anthony & Joe Russo', 
        minutes: 180, 
        imgUrl: 'https://live.staticflickr.com/7270/6976087418_59719341f5_b.jpg', 
        description: 'Iron Man, Thor, Hulk egli Avengers si uniscono per combattere ancora il loro più potente nemico: il malvagio Thanos. Il destino del pianeta e dell umanità non sono mai stati più incerti.', 
        videoUrl: 'https://www.youtube.com/watch?v=1-qqQc2ZmuU'
    },
    {
        id: 3, 
        title: 'Avengers: Endgame', 
        year: '2019', 
        genre: 'Fantasy', 
        director: 'Anthony & Joe Russo', 
        minutes: 190, 
        imgUrl: 'https://live.staticflickr.com/7270/6976087418_59719341f5_b.jpg', 
        description: 'In seguito allo schiocco di dita di Thanos, Clint Barton vede scomparire tutta la sua famiglia. Ventidue giorni più tardi, Tony Stark e Nebula sono sull astronave dei Guardiani della Galassia, con ossigeno e carburante che stanno per terminare, quando vengono salvati da Capitan Marvel, che li riporta sulla Terra.', 
        videoUrl: 'https://www.youtube.com/watch?v=1-qqQc2ZmuU'
    },
    {
        id: 4, 
        title: 'Tomb Raider 2', 
        year: '2003', 
        genre: 'Action', 
        director: 'Jan de Bont', 
        minutes: 130, 
        imgUrl: 'https://cdn.pixabay.com/photo/2016/01/24/23/59/tomb-raider-1159864_960_720.jpg', 
        description: 'La giovane Lara Croft, stanca di vivere lavorando come corriere in bicicletta, decide di abbandonare tutto per andare alla ricerca di suo padre, un avventuriero scomparso su una isola leggendaria del Giappone.', 
        videoUrl: 'https://www.youtube.com/watch?v=1-qqQc2ZmuU'
    },
    {
        id: 5, 
        title:'Natale a Miami', 
        year: '2005', 
        genre: 'Comic', 
        director: 'Neri Parenti', 
        minutes: 130, 
        imgUrl: 'https://cdn.pixabay.com/photo/2018/12/22/17/19/christmas-3889990_960_720.jpg', 
        description: 'Giorgio è disperato perché sua moglie l ha lasciato. Decide, quindi, di partire alla volta di Miami doveincontra Ranuccio, anche lui abbandonato dalla consorte. Nella città americana si intrecciano le vicende dei due uomini e delle rispettive famiglie.', 
        videoUrl: 'https://www.youtube.com/watch?v=1-qqQc2ZmuU'
    },
    {
        id: 6, 
        title: 'Natale a New York', 
        year: '2006', 
        genre: 'Comic', 
        director: 'Neri Parenti', 
        minutes: 140, 
        imgUrl: 'https://cdn.pixabay.com/photo/2018/12/22/17/19/christmas-3889990_960_720.jpg', 
        description: 'Camillo è innamorato di Barbara ma lei è sposata con Claudio. Questo ed altri intrecci, sotterfugi, malintesi e divertenti gag, sullo sfondo della Grande Mela, sono gli ingredienti che danno sapore alle vanze natalizie di un gruppo di Iitaliani a New York.', 
        videoUrl: 'https://www.youtube.com/watch?v=1-qqQc2ZmuU'
    },
    {
        id: 7, 
        title: 'American Pie', 
        year: '1999', 
        genre: 'Comic', 
        director: 'Paul, Chris Weitz', 
        minutes: 90, 
        imgUrl: 'https://live.staticflickr.com/7093/7131211705_0e0ce786f7_b.jpg', 
        description: 'Jim, Kevin, Paul e Chris sono quattro amici che stanno per diplomarsi al liceo e sono ossessionati dalla loro verginità. Dopo un altra festa passata in bianco, decidono di stringere un patto di reciproco aiuto al fine di fare sesso prima della fine dell anno scolastico. L ultima occasione è la festa a casa di Stifler in riva al lago, dove tutti si recano dopo il ballo di fine anno.', 
        videoUrl: 'https://www.youtube.com/watch?v=1-qqQc2ZmuU'
    },
    {
        id: 8, 
        title: 'American Pie 2', 
        year: '2001', 
        genre: 'Comic', 
        director: 'J. B. Rogers', 
        minutes: 100, 
        imgUrl: 'https://live.staticflickr.com/7093/7131211705_0e0ce786f7_b.jpg', 
        description: 'Dopo un anno in scuole diverse i ragazzi protagonisti del primo American Pie decidono di affittare una casa sulla spiaggia per trascorrere insieme la migliore estate di sempre.', 
        videoUrl: 'https://www.youtube.com/watch?v=1-qqQc2ZmuU'
    }
];


/*new Movie(1, 'Tomb Raider', '2001', 'Action', 'Director', 120, 'https://cdn.pixabay.com/photo/2016/01/24/23/59/tomb-raider-1159864_960_720.jpg', 'La giovane Lara Croft, stanca di vivere lavorando come corriere in bicicletta, decide di abbandonare tutto per andare alla ricerca di suo padre, un avventuriero scomparso su una isola leggendaria del Giappone.', 'https://www.youtube.com/watch?v=1-qqQc2ZmuU'),
    new Movie(2, 'Avengers: Infinity war', '2018', 'Fantasy', 'Director', 180, 'https://live.staticflickr.com/7270/6976087418_59719341f5_b.jpg', 'Iron Man, Thor, Hulk egli Avengers si uniscono per combattere ancora il loro più potente nemico: il malvagio Thanos. Il destino del pianeta e dell umanità non sono mai stati più incerti.', 'https://www.youtube.com/watch?v=1-qqQc2ZmuU'),
    new Movie(3, 'Avengers: Endgame', '2019', 'Fantasy', 'Director', 190, 'https://live.staticflickr.com/7270/6976087418_59719341f5_b.jpg', 'In seguito allo schiocco di dita di Thanos, Clint Barton vede scomparire tutta la sua famiglia. Ventidue giorni più tardi, Tony Stark e Nebula sono sull astronave dei Guardiani della Galassia, con ossigeno e carburante che stanno per terminare, quando vengono salvati da Capitan Marvel, che li riporta sulla Terra.', 'https://www.youtube.com/watch?v=1-qqQc2ZmuU'),
    new Movie(4, 'Tomb Raider 2', '2003', 'Action', 'Director', 130, 'https://cdn.pixabay.com/photo/2016/01/24/23/59/tomb-raider-1159864_960_720.jpg', 'La giovane Lara Croft, stanca di vivere lavorando come corriere in bicicletta, decide di abbandonare tutto per andare alla ricerca di suo padre, un avventuriero scomparso su una isola leggendaria del Giappone.', 'https://www.youtube.com/watch?v=1-qqQc2ZmuU'),
    new Movie(5, 'Natale a Miami', '2005', 'Comic', 'Director', 130, 'https://cdn.pixabay.com/photo/2018/12/22/17/19/christmas-3889990_960_720.jpg', 'Giorgio è disperato perché sua moglie l ha lasciato. Decide, quindi, di partire alla volta di Miami doveincontra Ranuccio, anche lui abbandonato dalla consorte. Nella città americana si intrecciano le vicende dei due uomini e delle rispettive famiglie.', 'https://www.youtube.com/watch?v=1-qqQc2ZmuU'),
    new Movie(6, 'Natale a New York', '2006', 'Comic', 'Director', 140, 'https://cdn.pixabay.com/photo/2018/12/22/17/19/christmas-3889990_960_720.jpg', 'Camillo è innamorato di Barbara ma lei è sposata con Claudio. Questo ed altri intrecci, sotterfugi, malintesi e divertenti gag, sullo sfondo della Grande Mela, sono gli ingredienti che danno sapore alle vanze natalizie di un gruppo di Iitaliani a New York.', 'https://www.youtube.com/watch?v=1-qqQc2ZmuU'),
    new Movie(7, 'American Pie', '1999', 'Comic', 'Director', 90, 'https://live.staticflickr.com/7093/7131211705_0e0ce786f7_b.jpg', 'Jim, Kevin, Paul e Chris sono quattro amici che stanno per diplomarsi al liceo e sono ossessionati dalla loro verginità. Dopo un altra festa passata in bianco, decidono di stringere un patto di reciproco aiuto al fine di fare sesso prima della fine dell anno scolastico. L ultima occasione è la festa a casa di Stifler in riva al lago, dove tutti si recano dopo il ballo di fine anno.', 'https://www.youtube.com/watch?v=1-qqQc2ZmuU'),
    new Movie(8, 'American Pie 2', '2001', 'Comic', 'Director', 100, 'https://live.staticflickr.com/7093/7131211705_0e0ce786f7_b.jpg', 'Dopo un anno in scuole diverse i ragazzi protagonisti del primo American Pie decidono di affittare una casa sulla spiaggia per trascorrere insieme la migliore estate di sempre.', 'https://www.youtube.com/watch?v=1-qqQc2ZmuU')
*/
