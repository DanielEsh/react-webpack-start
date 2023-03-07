import { factory, primaryKey } from '@mswjs/data'
import { rest } from 'msw'
import { seed, randUuid, rand } from '@ngneat/falso'

seed('test-seed')

const getId = () => randUuid()
const getSlug = () => rand(['slug1', 'slug2', 'slug3', 'slug4'])
const getName = () => rand(['name1', 'name2', 'name3', 'name4'])

export const db = factory({
  collection: {
    // id: primaryKey(() => getId()),
    id: primaryKey(Number),
    slug: () => getSlug(),
    name: () => getName(),
    goodsCount: Number,
  },
})

db.collection.create({
  id: 1,
  slug: 'exercitationem-nihil-in-fugit-fugit',
  name: 'Renner - Prosacco',
  goodsCount: 11,
})
db.collection.create({
  id: 2,
  slug: 'dolores-vel-est-omnis',
  name: 'Johnston - Wisozk',
  goodsCount: 74,
})
db.collection.create({
  id: 3,
  slug: 'unde-magnam-deserunt-occaecati-vitae-rerum-exercitationem-nemo',
  name: 'Lesch - Jakubowski',
  goodsCount: 77,
})
db.collection.create({
  id: 4,
  slug: 'blanditiis-sit-asperiores-eos-commodi-labore-labore-sunt-at',
  name: 'Boehm, Hettinger and Huels',
  goodsCount: 24,
})
db.collection.create({
  id: 5,
  slug: 'consequuntur-aut-nihil-neque',
  name: 'Welch, Lockman and Hand',
  goodsCount: 45,
})
db.collection.create({
  id: 6,
  slug: 'vel-quae-beatae-deserunt-est-necessitatibus-voluptatem-neque-quae',
  name: 'Upton - Reichert',
  goodsCount: 55,
})
db.collection.create({
  id: 7,
  slug: 'sed-reiciendis-fugiat-quaerat-esse-voluptatibus-consequatur',
  name: 'Brown LLC',
  goodsCount: 23,
})
db.collection.create({
  id: 8,
  slug: 'tenetur-doloribus-commodi-vitae-aut-labore',
  name: 'Mills Group',
  goodsCount: 61,
})
db.collection.create({
  id: 9,
  slug: 'commodi-magnam-maiores-repellat-tenetur-neque-voluptatibus-dicta-excepturi-necessitatibus',
  name: 'Boehm, Hettinger and Huels',
  goodsCount: 76,
})
db.collection.create({
  id: 10,
  slug: 'quas-aut-deserunt-voluptatem-nihil-sapiente-voluptatibus',
  name: 'Doyle Group',
  goodsCount: 56,
})
db.collection.create({
  id: 11,
  slug: 'ipsum-rerum-numquam-deserunt-non-maiores-sequi-sit',
  name: 'Doyle Group',
  goodsCount: 62,
})
db.collection.create({
  id: 12,
  slug: 'voluptatibus-voluptatibus-in-voluptatem-vitae-laborum-vitae',
  name: 'Dickens - Lang',
  goodsCount: 68,
})
db.collection.create({
  id: 13,
  slug: 'reiciendis-deserunt-laborum-facilis-quae-reiciendis-voluptatibus-necessitatibus-nemo',
  name: 'Swaniawski and Sons',
  goodsCount: 14,
})
db.collection.create({
  id: 14,
  slug: 'maiores-sunt-et-sit-consectetur',
  name: 'Orn, Gerlach and Runolfsdottir',
  goodsCount: 34,
})
db.collection.create({
  id: 15,
  slug: 'neque-consequatur-esse-ipsum-labore-at',
  name: 'Maggio, Wisoky and Blick',
  goodsCount: 37,
})
db.collection.create({
  id: 16,
  slug: 'sequi-sed-quasi-repellat-quas-labore',
  name: 'Walker - Zieme',
  goodsCount: 49,
})
db.collection.create({
  id: 17,
  slug: 'dts',
  name: 'DTS',
  goodsCount: 23,
})
db.collection.create({
  id: 18,
  slug: 'quos-commodi-repellat-possimus-magnam-at-occaecati',
  name: 'Bernier LLC',
  goodsCount: 99,
})
db.collection.create({
  id: 19,
  slug: 'sapiente-quae-facilis',
  name: 'Olson, Olson and Carter',
  goodsCount: 60,
})
db.collection.create({
  id: 20,
  slug: 'hic-maiores-nostrum-magnam-at-magnam-dolores-dolores-dicta-ullam',
  name: 'Greenholt - Mosciski',
  goodsCount: 28,
})

// const ITEMS_COUNT = 20

// for (let i = 0; i < ITEMS_COUNT; i++) db.collection.create()

const readAll = () => {
  return rest.get('http://localhost:8000/api/collection', (_req, res, ctx) => {
    const currentPage = Number(_req.url.searchParams.get('page')) ?? 1
    const limit = Number(_req.url.searchParams.get('limit')) ?? 1
    const offset = (currentPage - 1) * limit

    // take - limit
    // offset - skip

    console.group('Pagination')
    console.log('limit', limit)
    console.log('offset', offset)
    console.groupEnd()

    const firstPage = db.collection.findMany({
      take: limit,
      cursor: null,
    })

    const secondPage = db.collection.findMany({
      take: limit,
      cursor: firstPage[firstPage.length - 1].id,
    })

    const items = db.collection.findMany({
      take: limit,
      skip: offset,
    })

    const totalItemsCount = db.collection.count()
    const totalPages =
      totalItemsCount !== undefined
        ? Math.ceil(totalItemsCount / limit)
        : undefined

    const result = {
      items: items,
      meta: {
        totalCount: db.collection.count(),
        totalPages: totalPages,
        firstPage: firstPage,
        secondPage: secondPage,
      },
    }

    return res(ctx.json(result))
  })
}

export const collectionHandlers = [readAll()]
