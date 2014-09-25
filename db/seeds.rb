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
guestBoardList1 = guestBoard1.lists.create(title: 'Laundry')
guestBoardList2 = guestBoard1.lists.create(title: 'Pay Rent')
guestBoardList1Card1 = guestBoardList1.cards.create(title: 'bring money')
guestBoardList1Card2 = guestBoardList1.cards.create(title: 'bring detergent')
guestBoardList1Card3 = guestBoardList1.cards.create(title: 'bring books')