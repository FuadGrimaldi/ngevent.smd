# Speck API

## CMS

### Categories

| Routes                       | HTTP   | Deskripsi              | Dibuat | Hasil Test | Middleware Auth |
| ---------------------------- | ------ | ---------------------- | ------ | ---------- | --------------- |
| `/api/v1/cms/categories`     | GET    | Get all categories     | Ya     | Ya         | Ya              |
| `/api/v1/cms/categories`     | POST   | Create categories      | Ya     | Ya         | Ya              |
| `/api/v1/cms/categories/:id` | GET    | Get one category by id | Ya     | Ya         | Ya              |
| `/api/v1/cms/categories/:id` | PUT    | Update categories      | Ya     | Ya         | Ya              |
| `/api/v1/cms/categories/:id` | DELETE | Delete categories      | Ya     | Ya         | Ya              |

### Talents

| Routes                    | HTTP   | Deskripsi            | Dibuat | Hasil Test | Middleware Auth |
| ------------------------- | ------ | -------------------- | ------ | ---------- | --------------- |
| `/api/v1/cms/talents`     | GET    | Get all talents      | Ya     | Ya         | Ya              |
| `/api/v1/cms/talents`     | POST   | Create talents       | Ya     | Ya         | Ya              |
| `/api/v1/cms/talents/:id` | GET    | Get one talent by id | Ya     | Ya         | Ya              |
| `/api/v1/cms/talents/:id` | PUT    | Update talents       | Ya     | Ya         | Ya              |
| `/api/v1/cms/talents/:id` | DELETE | Delete talents       | Ya     | Ya         | Ya              |

### Images

| Routes               | HTTP | Deskripsi     | Dibuat | Hasil Test | Middleware Auth |
| -------------------- | ---- | ------------- | ------ | ---------- | --------------- |
| `/api/v1/cms/images` | POST | Create images | Ya     | Ya         | Ya              |

### Events

| Routes                          | HTTP   | Deskripsi            | Dibuat | Hasil Test | Middleware Auth |
| ------------------------------- | ------ | -------------------- | ------ | ---------- | --------------- |
| `/api/v1/cms/events`            | GET    | Get all events       | Ya     | Ya         | Ya              |
| `/api/v1/cms/events`            | POST   | Create events        | Ya     | Ya         | Ya              |
| `/api/v1/cms/events/:id`        | GET    | Get one events by id | Ya     | Ya         | Ya              |
| `/api/v1/cms/events/:id`        | PUT    | Update events        | Ya     | Ya         | Ya              |
| `/api/v1/cms/events/:id`        | DELETE | Delete events        | Ya     | Ya         | Ya              |
| `/api/v1/cms/events/:id/status` | PUT    | Update status events | Ya     | Ya         | Ya              |

### Payments

| Routes                            | HTTP   | Deskripsi              | Dibuat | Hasil Test | Middleware Auth |
| --------------------------------- | ------ | ---------------------- | ------ | ---------- | --------------- |
| `/api/v1/cms/payments`            | GET    | Get all payments       | Ya     | Ya         | Ya              |
| `/api/v1/cms/payments`            | POST   | Create payments        | Ya     | Ya         | Ya              |
| `/api/v1/cms/payments/:id`        | GET    | Get one payments by id | Ya     | Ya         | Ya              |
| `/api/v1/cms/payments/:id`        | PUT    | Update payments        | Ya     | Ya         | Ya              |
| `/api/v1/cms/payments/:id`        | DELETE | Delete payments        | Ya     | Ya         | Ya              |
| `/api/v1/cms/payments/:id/status` | PUT    | Update status payments | Ya     | Ya         | Ya              |

### Order

| Routes                   | HTTP | Deskrips             | Dibuat | Hasil Test | Middleware Auth |
| ------------------------ | ---- | -------------------- | ------ | ---------- | --------------- |
| `/api/v1/cms/orders`     | GET  | Get all orders       | Ya     | Ya         | Ya              |
| `/api/v1/cms/orders/:id` | GET  | Get one orders by id | Ya     | Ya         | Ya              |

### Auth

| Routes                   | HTTP | Deskrips               | Dibuat | Hasil Test | Middleware Auth |
| ------------------------ | ---- | ---------------------- | ------ | ---------- | --------------- |
| `/api/v1/cms/signin`     | POST | signin                 | Ya     | Ya         | Tidak           |
| `/api/v1/cms/organizers` | POST | Create admin/organizer | Ya     | Ya         | Ya              |

### Participants

| Routes                             | HTTP | Deskripsi               | Dibuat | Hasil Test | Middleware Auth |
| ---------------------------------- | ---- | ----------------------- | ------ | ---------- | --------------- |
| `/api/v1/events`                   | GET  | Get all events          | Ya     | Ya         | Tidak           |
| `/api/v1/events/:id`               | GET  | Get one events by id    | Ya     | Ya         | Tidak           |
| `/api/v1/events/:id/checkout`      | POST | Chekout events          | Ya     | Ya         | Ya              |
| `/api/v1/dashboard`                | GET  | Get all dashboard       | Ya     | Ya         | Ya              |
| `/api/v1/dashboard/:id`            | GET  | Get one dashboard by id | Ya     | Ya         | Ya              |
| `/api/v1/participants/auth/signin` | POST | signin                  | Ya     | Ya         | Tidak           |
| `/api/v1/participants/auth/signup` | POST | signup                  | Ya     | Ya         | Tidak           |

_Tambahkan sesuai spesifikasi yang diinginkan jika ada._
