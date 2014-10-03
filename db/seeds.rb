# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create(email: 'guest@gmail.com', password: 'password')
guestBoard1 = guest.boards.create(title: 'vs: Dookies')
guestBoard2 = guest.boards.create(title: 'vs: Wake Forest')
guestBoard3 = guest.boards.create(title: 'vs: NC State')
guestBoard4 = guest.boards.create(title: 'vs: Maryland')

guestBoardList1 = guestBoard1.lists.create(title: 'First Quarter', ord: 0)
guestBoardList2 = guestBoard1.lists.create(title: 'Second Quarter', ord: 1)
guestBoardList3 = guestBoard1.lists.create(title: 'Third Quarter', ord: 2)
guestBoardList4 = guestBoard1.lists.create(title: 'Forth Quarter', ord: 3)

guestBoardList1Card1 = guestBoardList1.cards.create(title: 'Pass to Jordan!', ord:0 )
guestBoardList1Card2 = guestBoardList1.cards.create(title: 'Pass to Jordan!!', ord:1)
guestBoardList1Card3 = guestBoardList1.cards.create(title: 'Pass to Jordan!!!', ord:2)

guestBoardList1Card4 = guestBoardList2.cards.create(title: 'Pass to Rasheed!', ord:0 )
guestBoardList1Card5 = guestBoardList2.cards.create(title: 'Pass to Carter!!', ord:1)
guestBoardList1Card6 = guestBoardList2.cards.create(title: 'Pass to Hansbrough!!!', ord:2)
guestBoardList1Card7 = guestBoardList2.cards.create(title: 'Pass to Jordan!!!!', ord:3)

guestBoardList1Card8 = guestBoardList3.cards.create(title: 'Go to Hell Dook!', ord:0 )
guestBoardList1Card9 = guestBoardList3.cards.create(title: 'Kee Calm and Go to Hell Dook', ord:1)

guestBoardList1Card10 = guestBoardList4.cards.create(title: 'Go Heels!', ord:0)
guestBoardList1Card11 = guestBoardList4.cards.create(title: 'What!!', ord:1)
guestBoardList1Card12 = guestBoardList4.cards.create(title: 'Dook Sucks!!!', ord:2)
guestBoardList1Card13 = guestBoardList4.cards.create(title: 'Seeding Data Sucks!!!', ord:3)


guestBoardList1Card1Checklist1 = guestBoardList1Card1.checklists.create(title: 'All Star Line-up', ord: 0)
guestBoardList1Card1Checklist2 = guestBoardList1Card1.checklists.create(title: 'Mediocre Line-up', ord: 1)
guestBoardList1Card1Checklist3 = guestBoardList1Card1.checklists.create(title: 'Coming Up', ord: 2)

guestBoardList1Card1Checklist1Item1 = guestBoardList1Card1Checklist1.items.create(title: "Michael Jordan", done: true, ord: 0)
guestBoardList1Card1Checklist1Item2 = guestBoardList1Card1Checklist1.items.create(title: "Vince Carter", done: false, ord: 1)
guestBoardList1Card1Checklist1Item3 = guestBoardList1Card1Checklist1.items.create(title: "Sam Perkins", done: true, ord: 2)
guestBoardList1Card1Checklist1Item4 = guestBoardList1Card1Checklist1.items.create(title: "Mitch Kupchak", done: true, ord: 3)
guestBoardList1Card1Checklist1Item5 = guestBoardList1Card1Checklist1.items.create(title: "James Worthy", done: true, ord: 4)
guestBoardList1Card1Checklist1Item6 = guestBoardList1Card1Checklist2.items.create(title: "What!!!!", done: false, ord: 0)