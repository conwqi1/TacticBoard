# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create(email: 'guest@gamil.com', password: 'password')
guestBoard1 = guest.boards.create(title: 'ToDo')
guestBoard1 = guest.boards.create(title: 'Urgent')
guestBoardList1 = guestBoard1.lists.create(title: 'Laundry')
guestBoardList1 = guestBgoard1.lists.create(title: 'Pay Rent')