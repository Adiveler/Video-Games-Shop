import VideoGame from '../../models/VideoGame';
import Coupon from '../../models/Coupon';

export const Videogames = [
    new VideoGame('111111111', 'Doom', 'First Person Shooter', 'id Software', 'id Software', 1993, 50, require("./images/videogames/FPS/Doom.jpg"), `Shoot the demons`,1),
    new VideoGame('111111112', 'Halo', 'First Person Shooter', 'Microsoft', 'Bungie', 2001, 50, require("./images/videogames/FPS/Halo.jpg"), `Shoot the aliens`,2),
    new VideoGame('111111113', 'Half-Life 2', 'First Person Shooter', 'Valve', 'Valve', 2004, 50, require("./images/videogames/FPS/HL2.jpg"), `Shoot the Combine`,3),
    new VideoGame('111111114', 'Serious Sam 4', 'First Person Shooter', 'Devolver Digital', 'Croteam', 2021, 40, require("./images/videogames/FPS/SS4.jpg"), `Shoot bizzare creatures`,4),

    new VideoGame('222222221', 'StarCraft', 'Real-time strategy', 'Blizzard Entertainment', 'Blizzard Entertainment', 1998, 50, require("./images/videogames/RTS/StarCraft.jpg"), `Sci-Fi Strategy game`,5),
    new VideoGame('222222222', 'Warcraft 3', 'Real-time strategy', 'Blizzard Entertainment', 'Blizzard Entertainment', 2002, 50, require("./images/videogames/RTS/WarCraft3.jpg"), `Fantasy Strategy game`,6),
    new VideoGame('222222223', 'Red Alert 2', 'Real-time strategy', 'EA Games', 'Westwood Pacific', 2000, 50, require("./images/videogames/RTS/RA2.jpg"), `Alternate Reality Strategy game`,7),
    new VideoGame('222222224', 'Age of Empires IV', 'Real-time strategy', '	Xbox Game Studios', 'Relic Entertainment', 2021, 60, require("./images/videogames/RTS/AoE4.jpg"), `Historical Strategy game`,8),

    new VideoGame('333333331', 'Diablo', 'Role-Playing Game', 'Blizzard Entertainment', 'Blizzard North', 1997, 50, require("./images/videogames/RPG/Diablo.jpg"), `Not even death can save you from me!`,9),
    new VideoGame('333333332', 'Neverwinter Nights', 'Role-Playing Game', 'Infogrames', 'BioWare', 2002, 50, require("./images/videogames/RPG/NN.jpg"), `Old School RPG`,10),
    new VideoGame('333333333', 'Deus Ex', 'Role-Playing Game', 'Eidos Interactive', 'Ion Storm', 2000, 50, require("./images/videogames/RPG/DeusEx.jpg"), `My vision is augmented`,11),
    new VideoGame('333333334', 'Fallout: New Vegas', 'Role-Playing Game', 'Bethesda Softworks', 'Obsidian Entertainment', 2010, 50, require("./images/videogames/RPG/FNV.jpg"), `Truth Is, The Game Was Rigged From The Start.`,12),

    new VideoGame('444444441', 'Banjo-Kazooie', '3D Platform', 'Nintendo', 'Rare', 1998, 50, require("./images/videogames/3DPlatform/BK.jpg"), `The game's story focuses on a bear named Banjo and a bird named Kazooie as they set out on a quest to rescue Banjo's sister, Tooty, who was kidnapped by the witch Gruntilda.`,13),
    new VideoGame('444444442', 'Rayman 2', '3D Platform', 'Ubisoft', 'Ubisoft', 1999, 50, require("./images/videogames/3DPlatform/Rayman2.jpg"), `Rayman 2 takes place in a world called the Glade of Dreams, and revolves around its invasion and occupation by an armada of interstellar Robo-Pirates, led by Admiral Razorbeard.`,14),
    new VideoGame('444444443', 'A Hat in Time', '3D Platform', 'Humble Bundle', 'Gears for Breakfast', 2017, 50, require("./images/videogames/3DPlatform/AHiT.jpg"), `Seagull eat fish. But fish belong to Mafia. Mafia punch seagull for not respecting Mafia. Seagull say "No, please! I have child!" Mafia punch seagull with child.`,15),
    new VideoGame('444444444', 'Psychonauts 2', '3D Platform', 'Xbox Game Studios', 'Double Fine', 2021, 50, require("./images/videogames/3DPlatform/Psychonauts2.jpg"), `The Psychonauts try to learn who was really behind the kidnapping of their leader, unveiling a deep mystery surrounding the organization's founding and Raz's family history.`,16),

    new VideoGame('555555551', 'Day of the Tentacle', 'Point & Click Adventure', 'LucasArts', 'LucasArts', 1993, 50, require("./images/videogames/PnC/DotT.jpg"), `I feel like I could... like I could... like I could... TAKE ON THE WORLD!!`,17),
    new VideoGame('555555552', 'The Curse of Monkey Island', 'Point & Click Adventure', 'LucasArts', 'LucasArts', 1997, 50, require("./images/videogames/PnC/tCoMI.jpg"), `Look behind you, a three headed monkey!`,18),
    new VideoGame('555555553', 'Grim Fandango', 'Point & Click Adventure', 'LucasArts', 'LucasArts', 1998, 50, require("./images/videogames/PnC/GF.jpg"), `Love? Love is for the living, Sal. I'm only after her for one reason - she's my ticket out of here.`,19),
    new VideoGame('555555554', 'Broken Age', 'Point & Click Adventure', 'Double Fine Productions', 'Double Fine Productions', 2014, 50, require("./images/videogames/PnC/BA.jpg"), `Broken Age tells the story of two teenagers with no immediately apparent connection, each "seeking to break the tradition in their lives".`,20),

    new VideoGame('666666661', 'Portal', 'Puzzle', 'Valve', 'Valve', 2007, 10, require("./images/videogames/Puzzle/Portal.jpg"), `A test subject wakes up in a scientific facility controlled by a sadistic artificial intelligence and must escape with the help of the only instrument she has--a gun that makes portals.`,21),
    new VideoGame('666666662', 'EXAPUNKS', 'Puzzle', 'Zachtronics', 'Zachtronics', 2018, 40, require("./images/videogames/Puzzle/Exapunks.jpg"), `The year is 1997. You used to be a hacker, but now you have the phage. You made a deal: one hack, one dose. There's nothing left to lose… except your life.`,22),
    new VideoGame('666666663', 'World of Goo', 'Puzzle', '2D BOY', '2D BOY', 2008, 15, require("./images/videogames/Puzzle/WoG.jpg"), `World of Goo is about the exploits (and exploitation) of a group of lovable sentient goo balls.`,23),
    new VideoGame('666666664', 'Baba Is You', 'Puzzle', 'Hempuli Oy', 'Hempuli Oy', 2019, 15, require("./images/videogames/Puzzle/BiY.jpg"), `You can change the rules by which you play.`,24)
];

export const Coupons = [
    new Coupon(111, 'Pashut', 0.9), // 10% discount
    new Coupon(222, 'Stam', 0.7), // 30% discount
    new Coupon(333, 'Kacha', 0.6) // 40% discount
];

export const listTab = [
    {key: 1, genre: 'All'},
    {key: 2, genre: 'First Person Shooter'},
    {key: 3, genre: 'Real-time strategy'},
    {key: 4, genre: 'Role-Playing Game'},
    {key: 5, genre: '3D Platform'},
    {key: 6, genre: 'Point & Click Adventure'},
    {key: 7, genre: 'Puzzle'}
];
