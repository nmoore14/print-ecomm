package seed

import (
    "log"
    "github.com/jinzhu/gorm"
    "github.com/nmoore14/backend/api/models"
)

var users = []models.User{
    models.User{
        Username: "nmoore",
        Name: "Nick Moore",
        Title: "Web Admin",
        Email: "nickmoore_1@yahoo.com",
        Password: "password",
        Permission: 1,
    },
    models.User{
        Username: "doray",
        Name: "Doyle Moore",
        Title: "President",
        Email: "doraymo@yahoo.com",
        Password: "password1",
        Permission: 1,
    },
}

var posts = []models.Post{
	models.Post{
		Title:   "Title 1",
		Content: "Hello world 1",
	},
	models.Post{
		Title:   "Title 2",
		Content: "Hello world 2",
	},
}

func Load(db *gorm.DB) {

	err := db.Debug().DropTableIfExists(&models.Post{}, &models.User{}).Error
	if err != nil {
		log.Fatalf("cannot drop table: %v", err)
	}
	err = db.Debug().AutoMigrate(&models.User{}, &models.Post{}).Error
	if err != nil {
		log.Fatalf("cannot migrate table: %v", err)
	}

	err = db.Debug().Model(&models.Post{}).AddForeignKey("author_id", "users(id)", "cascade", "cascade").Error
	if err != nil {
		log.Fatalf("attaching foreign key error: %v", err)
	}

	for i, _ := range users {
		err = db.Debug().Model(&models.User{}).Create(&users[i]).Error
		if err != nil {
			log.Fatalf("cannot seed users table: %v", err)
		}
		posts[i].AuthorID = users[i].ID

		err = db.Debug().Model(&models.Post{}).Create(&posts[i]).Error
		if err != nil {
			log.Fatalf("cannot seed posts table: %v", err)
		}
	}
}
