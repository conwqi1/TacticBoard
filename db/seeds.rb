# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create(email: 'guest@gmail.com', password: 'password')
guestBoard1 = guest.boards.create(title: 'ToDo')
guestBoard2 = guest.boards.create(title: 'Urgent')
guestBoardList1 = guestBoard1.lists.create(title: 'Laundry', ord: 0)
guestBoardList2 = guestBoard1.lists.create(title: 'Pay Rent', ord: 1)
guestBoardList1Card1 = guestBoardList1.cards.create(title: 'bring money', ord:0 )
guestBoardList1Card2 = guestBoardList1.cards.create(title: 'bring detergent', ord:1)
guestBoardList1Card3 = guestBoardList1.cards.create(title: 'bring books', ord:2)
guestBoardList1Card1Checklist1 = guestBoardList1Card1.checklists.create(title: 'washing money', ord: 0)
guestBoardList1Card1Checklist2 = guestBoardList1Card1.checklists.create(title: 'drying money', ord: 1)
guestBoardList1Card1Checklist3 = guestBoardList1Card1.checklists.create(title: 'detergent money', ord: 2)
guestBoardList1Card1Checklist1Item1 = guestBoardList1Card1Checklist1.items.create(title: "item1", done: true, ord: 0)
guestBoardList1Card1Checklist1Item2 = guestBoardList1Card1Checklist1.items.create(title: "item2", done: false, ord: 1)
guestBoardList1Card1Checklist1Item3 = guestBoardList1Card1Checklist1.items.create(title: "item3", done: true, ord: 2)