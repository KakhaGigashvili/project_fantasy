export interface Book {
    id: number;
    title: string;
    imageUrl: string;
    text: string;
}


const cards: Book[] = [
    {id: 1,
     title: 'სატახტოთა თამაში', 
     imageUrl: "/book-img/got1.jpg", 
     text: 'სატახტოთა თამაში (ინგლ. A Game of Thrones) — პირველი წიგნი ეპიკური ფენტეზის ჟანრის რომანების სერიაში „ყინულისა და ცეცხლის სიმღერა“, რომლის ავტორია ჯორჯ რეიმონდ რიჩარდ მარტინი. წიგნი პირველად გამოიცა 1996 წლის 6 აგვისტოს.'
    },
    {id: 2,
     title: 'მეფეთა ჯახი', 
     imageUrl: "/book-img/got2.jpg", 
     text: 'მეფეთა ჯახი (ინგლ. A Clash of Kings) — მეორე წიგნი ეპიკური ფენტეზის ჟანრის რომანების სერიაში „ყინულისა და ცეცხლის სიმღერა“, რომლის ავტორია ჯორჯ რეიმონდ რიჩარდ მარტინი. წიგნი პირველად გამოიცა 1998 წლის 16 ნოემბერს დიდ ბრიტანეთში, ამერიკული გამოცემა კი 1999 წლის მარტში შედგა.'
    },
    {id: 3,
     title: 'ხმლების გრიგალი', 
     imageUrl: "/book-img/got3.jpg", 
     text: 'ხმლების გრიგალი (ინგლ. A Storm of Swords) — მესამე წიგნი ეპიკური ფენტეზის ჟანრის რომანების სერიაში „ყინულისა და ცეცხლის სიმღერა“, რომლის ავტორია ჯორჯ რეიმონდ რიჩარდ მარტინი. წიგნი პირველად გამოიცა 2000 წლის 8 აგვისტოს დიდ ბრიტანეთში, ამერიკული გამოცემა კი იმავე წლის ნოემბერში შედგა. მანამდე გამოიცა ნოველა დრაკონის გზა, რომელშიც შევიდა დენირეს ტარგარიენის რამდენიმე თავი წიგნიდან.'
    },
    {id: 4,
     title: 'ყვავების ნადიმი', 
     imageUrl: "/book-img/got4.jpg", 
     text: 'ყვავების ნადიმი (ინგლ. A Feast for Crows) — მეოთხე წიგნი ეპიკური ფენტეზის ჟანრის რომანების სერიაში „ყინულისა და ცეცხლის სიმღერა“, რომლის ავტორია ჯორჯ რეიმონდ რიჩარდ მარტინი. წიგნი პირველად გამოიცა 2005 წლის 17 ოქტომბერს დიდ ბრიტანეთში, ამერიკული გამოცემა კი იმავე წლის 8 ნოემბერს შედგა.'
    },
    {id: 5,
     title: 'დრაკონებთან ცეკვა', 
     imageUrl: "/book-img/got5.jpg", 
     text: 'დრაკონებთან ცეკვა (ინგლ. A Dance with Dragons) — მეხუთე წიგნი ეპიკური ფენტეზის ჟანრის რომანების სერიაში „ყინულისა და ცეცხლის სიმღერა“, რომლის ავტორია ჯორჯ რეიმონდ რიჩარდ მარტინი. წიგნი გამოიცა 2011 წლის 12 ივლისს. თავდაპირველად, ჯერ კიდევ მაშინ, როდესაც მარტინი სერიის ტრილოგიად გამოშვებას აპირებდა, ცეკვა დრაკონებთან ტრილოგიის დასკვნითი ნაწილის სათაური უნდა ყოფილიყო. ზოგ ქვეყანაში წიგნი ორ ნაწილად გამოიცა, რომლებიც დასათაურებული იყო, როგორც ოცნებები და მტვერი და ნადიმის შემდეგ.'
    },
    {id: 6,
     title: 'ნისლქმნილი უკანასკნელი იმპეირია', 
     imageUrl: "/book-img/nis1.jpg", 
     text: 'ნისლქმნილი უკანასკნელი იმპერია (Mistborn: The Final Empire) არის ბრენდონ სანდერსონის ფენტეზი ტრილოგიის პირველი ნაწილი და წარმოადგენს ერთ-ერთ ყველაზე მნიშვნელოვან ნაწარმოებს ამ ჟანრში.'
    },
    {id: 7,
     title: 'ნისლქმნილი აღზევების წყარო', 
     imageUrl: "/book-img/nis2.jpg", 
     text: 'ნისლქმნილი აღზევების წყარო (Mistborn: The Well of Ascension) არის ბრენდონ სანდერსონის ფენტეზი ტრილოგიის მეორე ნაწილი, რომელიც პირველის შემდეგ პირდაპირ აგრძელებს მოვლენებს და აშენებს უფრო კომპლექსურ ისტორიას, სავსე პოლიტიკური დრამით, ახალი პრობლემებით და დიდი გამოწვევებით.'
    },
    {id: 8,
     title: 'ნისლქმნილი ეპოქათა გმირი |', 
     imageUrl: "/book-img/nis31.jpg", 
     text: 'ნისლქმნილი ეპოქათა გმირი (Mistborn: The Hero of Ages) არის ბრენდონ სანდერსონის ფენტეზი ტრილოგიის მესამე და დასკვნითი ნაწილი, რომელიც აგვირგვინებს ყველა იმ მოვლენას და კონფლიქტს, რაც წინა ორ წიგნში განვითარდა. ეს ნაწილი უფრო ეპიკურია და მნიშვნელოვანი თემების დასკვნაში დაგვხმარებია, როგორც პერსონაჟების, ასევე სამყაროს თვალსაზრისით.'
    },
    {id: 9,
     title: 'ნისლქმნილი ეპოქათა გმირი ||', 
     imageUrl: "/book-img/nis32.png", 
     text: 'ნისლქმნილი ეპოქათა გმირი (Mistborn: The Hero of Ages) არის ბრენდონ სანდერსონის ფენტეზი ტრილოგიის მესამე და დასკვნითი ნაწილი, რომელიც აგვირგვინებს ყველა იმ მოვლენას და კონფლიქტს, რაც წინა ორ წიგნში განვითარდა. ეს ნაწილი უფრო ეპიკურია და მნიშვნელოვანი თემების დასკვნაში დაგვხმარებია, როგორც პერსონაჟების, ასევე სამყაროს თვალსაზრისით.'
    },
    {id: 10,
     title: 'ბეჭდების მბრძანებელი ბეჭდის საძმო', 
     imageUrl: "/book-img/tlotr1.webp", 
     text: 'ბეჭდის საძმო (ინგლ. The Fellowship of the Ring) — ჯ.რ.რ. ტოლკინის ეპიკური რომანის „ბეჭდების მბრძანებელი“ პირველი წიგნი, რომლის მოქმედებას ადგილი აქვს შუახმელეთში. წიგნი გამოიცა 1954 წლის 24 ივლისს. წიგნი შედგება პროლოგისგან, რომელშიც მოთხრობილია ჰობიტებსა და სხვა საკითხებზე, რასაც მოჰყვება წიგნები I და II.'
    },
    {id: 11,
     title: 'ბეჭდების მბრძანებელი ორი ციხე-კოშკი', 
     imageUrl: "/book-img/tlotr2.webp", 
     text: 'ორი ციხე-კოშკი (ინგლ. The Two Towers) — ჯ.რ.რ. ტოლკინის ეპიკური რომანის „ბეჭდების მბრძანებელი“ მეორე წიგნი, რომლის მოქმედებას ადგილი აქვს შუახმელეთში. გამოიცა 1954 წელს.'
    },
    {id: 12,
     title: 'ბეჭდების მბრძანებელი მეფის დაბრუნება', 
     imageUrl: "/book-img/tlotr3.jpg", 
     text: 'მეფის დაბრუნება (ინგლ. The Return of the King) — ჯ.რ.რ. ტოლკინის ეპიკური რომანის „ბეჭდების მბრძანებელი“ მესამე წიგნი, რომლის მოქმედებას ადგილი აქვს შუახმელეთში. წიგნი გამოვიდა 1955 წლის 20 ოქტომბერს.'
    },
    {id: 13,
     title: 'ჰარი პოტერი და ფილოსოფიური ქვა', 
     imageUrl: "/book-img/hp1.webp", 
     text: 'ჰარი პოტერი და ფილოსოფიური ქვა (ინგლ. Harry Potter and the Philosopher\'s Stone) პირველი წიგნი ჰარი პოტერის რომანების სერიაში, რომლის ავტორი არის ჯოან როულინგი.'
    },
    {id: 14,
     title: 'ჰარი პოტერი და საიდუმლო ოთახი', 
     imageUrl: "/book-img/hp2.jpg", 
     text: 'ჰარი პოტერი და საიდუმლო ოთახი (ინგლ. Harry Potter and the Chamber of Secrets) — მეორე წიგნი ჰარი პოტერის რომანების სერიაში, რომლის ავტორიც არის ჯოან როულინგი.'
    },
    {id: 15,
     title: 'ჰარი პოტერი და აზკაბანის ტყვე', 
     imageUrl: "/book-img/hp3.jpg", 
     text: 'ჰარი პოტერი და აზკაბანის ტყვე (ინგლ. Harry Potter and the Prisoner of Azkaban) — მესამე წიგნი ჰარი პოტერის რომანების სერიაში, რომლის ავტორიც არის ჯოან როულინგი.'
    },
    {id: 16,
     title: 'ჰარი პოტერი და ცეცხლოვანი თასი', 
     imageUrl: "/book-img/hp4.jpg", 
     text: 'ჰარი პოტერი და ცეცხლოვანი თასი (ინგლ. Harry Potter and the Goblet of Fire) — მეოთხე წიგნი ჰარი პოტერის რომანების სერიაში, რომლის ავტორიც არის ჯოან როულინგი.'
    },
    {id: 17,
     title: 'ჰარი პოტერი და ფენიქსის ორდენი', 
     imageUrl: "/book-img/hp5.jpg", 
     text: 'ჰარი პოტერი და ფენიქსის ორდენი (ინგლ. Harry Potter and the Order of the Phoenix) — მეხუთე წიგნი ჰარი პოტერის რომანების სერიაში, რომლის ავტორიც არის ჯოან როულინგი.'
    },
    {id: 18,
     title: 'ჰარი პოტერი და ნახევარპრინცი', 
     imageUrl: "/book-img/hp6.webp", 
     text: 'ჰარი პოტერი და ნახევარპრინცი (ინგლ. Harry Potter and the Half-Blood Prince) — მეექვსე წიგნი ჰარი პოტერის რომანების სერიაში, რომლის ავტორიც არის ჯოან როულინგი.'
    },
    {id: 19,
     title: 'ჰარი პოტერი და სიკვდილის საჩუქრები', 
     imageUrl: "/book-img/hp7.jpg", 
     text: 'ჰარი პოტერი და სიკვდილის საჩუქრები (ინგლ. Harry Potter and the Deathly Hallows) — მეშვიდე და უკანასკნელი წიგნი ჰარი პოტერის რომანების სერიაში, რომლის ავტორი არის ჯოან როულინგი.'
    },
    {id: 20,
     title: 'მეხუთე სეზონი', 
     imageUrl: "/book-img/gm1.jpg", 
     text: 'მეხუთე სეზონი ამერიკელი მწერლის ნკ ჯემისინის 2015 წლის სამეცნიერო ფანტასტიკური რომანი. მას მიენიჭა ჰიუგოს ჯილდო საუკეთესო რომანისთვის 2016 წელს. ეს არის პირველი ტომი გატეხილი დედამიწის სერიის და მოჰყვება ობელისკის კარიბჭე და ქვის ცა .'
    },
    {id: 21,
     title: 'ობელისკის კარიბჭე', 
     imageUrl: "/book-img/gm2.png", 
     text: 'ობელისკის კარიბჭე არის ნ.კ ჯემისინის 2016 წლის სამეცნიერო ფანტასტიკური რომანიდა მეორე ტომი გატეხილი დედამიწის სერიის მეხუთე სეზონის შემდეგდა ქვის ცის წინ. ობელისკის კარიბჭე გამოიცა ძლიერი შეფასებებით და, ისევე როგორც მისი წინამორბედი სერიალში, მოიგო ჰიუგოს ჯილდო საუკეთესო რომანისთვის.'
    },
    {id: 22,
     title: 'თვით მახვილი', 
     imageUrl: "/book-img/fl1.png", 
     text: 'თვით მახვილი არის პირველი რომანი პირველი კანონის ტრილოგიაში და იყო ჯო აბერკრომბის პირველი რომანი. ის პირველად გამოიცა 2006 წლის მაისში Gollancz-ის მიერ დიდ ბრიტანეთში, ამერიკული გამოცემა Pyr Books-ის შემდეგ.'
    },
    {id: 23,
     title: 'სანამ მათ ჩამოახრჩობენ', 
     imageUrl: "/book-img/fl2.jpg", 
     text: 'სანამ მათ ჩამოახრჩობენ არის მეორე რომანი პირველი კანონის ტრილოგიაში და იყო ჯო აბერკრომბის მეორე რომანი. ის პირველად გამოიცა 2007 წლის მარტში Gollancz-ის მიერ დიდ ბრიტანეთში, ამერიკული გამოცემასთან ერთად Pyr Books.'
    },
    {id: 24,
     title: 'მეფეთა უკანასკნელი არგუმენტი', 
     imageUrl: "/book-img/fl3.png", 
     text: 'მეფეთა უკანასკნელი არგუმენტი არის მესამე და ბოლო რომანი პირველი კანონის ტრილოგიაში და იყო ჯო აბერკრომბის მესამე რომანი. ის პირველად გამოქვეყნდა 2008 წლის მარტში Gollancz-ის მიერ დიდ ბრიტანეთში, ამერიკული გამოცემასთან ერთად Pyr Books.'
    },
    {id: 25,
     title: 'ყვავების ექვსეული', 
     imageUrl: "/book-img/soc1.jpg", 
     text: 'ყვავების ექვსეული არის ფანტასტიკური რომანი , დაწერილი ისრაელ-ამერიკელი ავტორისლეი ბარდუგოს მიერ და გამოქვეყნებულია ჰენრი ჰოლტისა და კომპანიის მიერ 2015 წელს . შთაგონებულია ჰოლანდიის რესპუბლიკის ეპოქის ამსტერდამით. სიუჟეტი მოთხრობილიარვა განსხვავებული პერსონაჟის მესამე პირის თვალსაზრისით.'
    },
    {id: 26,
     title: 'უკუღმართი სამეფო', 
     imageUrl: "/book-img/soc2.png", 
     text: 'უკუღმართი სამეფო არის ისრაელ-ამერიკელი ავტორისლეი ბარდუგოს მიერ დაწერილი ფანტასტიკური რომანი , რომელიცგამოქვეყნდა ჰენრი ჰოლტისა და კომპანიის მიერ 2016 წელს . დუოლოგიის პირველი წიგნიდან, ექვსი ყვავები. სიუჟეტი მოთხრობილიარვა პერსონაჟის მესამე პირის თვალსაზრისით.'
    },
    {id: 27,
     title: 'ჩრდილი და ძვალი', 
     imageUrl: "/book-img/sb1.jpg", 
     text: 'ჩრდილი და ძვალი არის ახალგაზრდების ფანტასტიკური თავგადასავალი და სადებიუტო რომანი, რომელიც დაწერილია ისრაელ-ამერიკელი ავტორის ლეი ბარდუგოს მიერ . ის გამოქვეყნდა Macmillan Publishers-ის მიერ 2012 წლის 5 ივნისს. რომანი მოგვითხრობს ალინა სტარკოვს, თინეიჯერ ობოლი, რომელიც იზრდება რუსეთის მიერ შთაგონებულ მიწაზე, რავკაში, როდესაც, ერთ დღეს, ის მოულოდნელად გამოიყენებს ძალას, რომელიც არასოდეს იცოდა, რომ გააჩნდა.'
    },
    {id: 28,
     title: 'ალყა და გრიგალი', 
     imageUrl: "/book-img/sb2.png", 
     text: 'ალყა და გრიგალი (Siege and Storm) არის გრიშას ტრილოგიის მეორე ნაწილი, რომელიც გრძელდება ალინა სტარკოვის ისტორიას. მას შემდეგ, რაც ალინა გაიქცა რავკიდან პირველ წიგნში, ახლა ის ცდილობს თავის დამალვას და ნორმალურ ცხოვრებას თავის მეგობარ მალთან ერთად. თუმცა, ბნელები (Darkling) ძლიერდება და ალინას პოვნას ცდილობს, რათა გამოიყენოს მისი უნარი შუქის მმართველობაზე.'
    },
    {id: 29,
     title: 'დიუნი', 
     imageUrl: "/book-img/d1.jpg", 
     text: 'დიუნი არისამერიკელი ავტორის ფრენკ ჰერბერტის 1965 წლის ეპიკური სამეცნიერო ფანტასტიური რომანი , რომელიც თავდაპირველად გამოქვეყნდა ორი ცალკეული სერიების სახით (1963–64 რომანი Dune World და 1965 რომანი Dune of Dune ) ჟურნალში Analog . იგი დაუკავშირდა როჯერ ზელაზნის " ეს უკვდავი " ჰიუგოს ჯილდოს საუკეთესო რომანისთვის და მოიპოვა საინაუგურაციო ჯილდო "ნებულა" საუკეთესო რომანისთვის 1966 წელს. ეს არის დიუნის ქრონიკების პირველი ნაწილი. ეს არის მსოფლიოში ერთ-ერთი ყველაზე გაყიდვადი სამეცნიერო ფანტასტიკური რომანი'
    },
    {id: 30,
     title: 'დიუნის მესია', 
     imageUrl: "/book-img/d2.png", 
     text: 'დიუნის მესია არისამერიკელი მწერლის ფრენკ ჰერბერტის 1969 წლის სამეცნიერო ფანტასტიკური რომანი , მეორე მისი დიუნის ექვსი რომანის სერიიდან . Dune- ის (1965) გაგრძელებაა, იგი თავდაპირველად გამოქვეყნდა ჟურნალ Galaxy- ში 1969 წელს, შემდეგ კიიმავე წელს გამოქვეყნდა Putnam- ის მიერ. Dune Messiah და მისი საკუთარი გაგრძელება Children of Dune (1976) ერთობლივად გადაკეთდა Sci-Fi Channel-ის მიერ 2003 წელს მინისერიალში სახელწოდებით Frank Herbert\'s Children of Dune .'
    }
]

export default cards 