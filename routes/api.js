{
    url: '/lottery/add',
    method: 'POST',
    data: {
        rewardAccount: 1,
        name: "test",
        openType: 1,
        countForType: 2,
        lotteryOrder: 2,
        sponcerDesc: "aaaaaa",
        sponcerName: "aaaaa",
        sponcerId: 1,
        startTime: '2018-10-31 00:34:05',
        endTime: '2018-11-30 00:34:12',
        imgUrl: 'http://aa.bb.com/foo/bar.jpg',
        isPublic: true,
    },
    success: {
        msg: 'successful',
        code: 1, 
    }
}

{
    url: '/basicAccount/:userId',
    method: 'GET',
    success: {
        msg: 'successful',
        code: 1,
        data: {
            lotteryJoinAccount: 2,
            lotteryStartAccount: 2,
            lotteryGetAccount: 2,
        } 
    }
}

{
    url: '/lotteryStart',
    method: 'GET',
    data: {
        userId: 'test1'
    }
    success: {
        msg: 'successful',
        code: 1,
        data: [{
            rewardAccount: 1,
            name: "test",
            openType: 1,
            countForType: 2,
            lotteryOrder: 2,
            sponcerDesc: "aaaaaa",
            sponcerName: "aaaaa",
            sponcerId: 1,
            startTime: '2018-10-31 00:34:05',
            endTime: '2018-11-30 00:34:12',
            imgUrl: 'http://aa.bb.com/foo/bar.jpg',
            isPublic: false,
        }]
    }
}

{
    url: '/lotteryJoin',
    method: 'GET',
    data: {
        userId: 'test1',
        isPublic: true // false | null | true
    }
    success: {
        msg: 'successful',
        code: 1,
        data: [{
            rewardAccount: 1,
            name: "test",
            openType: 1,
            countForType: 2,
            lotteryOrder: 2,
            sponcerDesc: "aaaaaa",
            sponcerName: "aaaaa",
            sponcerId: 1,
            startTime: '2018-10-31 00:34:05',
            endTime: '2018-11-30 00:34:12',
            imgUrl: 'http://aa.bb.com/foo/bar.jpg',
            isPublic: false,
        }]
    }
}

{
    url: '/lotteryGet',
    method: 'GET',
    data: {
        userId: 'test1',
        isPublic: true // false | null | true
    }
    success: {
        msg: 'successful',
        code: 1,
        data: [{
            rewardAccount: 1,
            name: "test",
            openType: 1,
            countForType: 2,
            lotteryOrder: 2,
            sponcerDesc: "aaaaaa",
            sponcerName: "aaaaa",
            sponcerId: 1,
            startTime: '2018-10-31 00:34:05',
            endTime: '2018-11-30 00:34:12',
            imgUrl: 'http://aa.bb.com/foo/bar.jpg',
            isPublic: false,
        }]
    }
}

{
    url: '/lotteryGet',
    method: 'GET',
    data: {
        userId: 'test1',
        isPublic: true // false | null | true
    }
    success: {
        msg: 'successful',
        code: 1,
        data: [{
            rewardAccount: 1,
            name: "test",
            openType: 1,
            countForType: 2,
            lotteryOrder: 2,
            sponcerDesc: "aaaaaa",
            sponcerName: "aaaaa",
            sponcerId: 1,
            startTime: '2018-10-31 00:34:05',
            endTime: '2018-11-30 00:34:12',
            imgUrl: 'http://aa.bb.com/foo/bar.jpg',
            isPublic: false,
        }]
    }
}

{
    url: '/lotteryGet',
    method: 'GET',
    data: {
        userId: 'test1',
        isPublic: true // false | null | true
    }
    success: {
        msg: 'successful',
        code: 1,
        data: [{
            rewardAccount: 1,
            name: "test",
            openType: 1,
            countForType: 2,
            lotteryOrder: 2,
            sponcerDesc: "aaaaaa",
            sponcerName: "aaaaa",
            sponcerId: 1,
            startTime: '2018-10-31 00:34:05',
            endTime: '2018-11-30 00:34:12',
            imgUrl: 'http://aa.bb.com/foo/bar.jpg',
            isPublic: false,
        }]
    }
}

{
    url: '/lottery/detail',
    method: 'GET',
    data: {
        lotteryId: 'test1',
    }
    success: {
        msg: 'successful',
        code: 1,
        data: {
            rewardAccount: 1,
            name: "test",
            openType: 1,
            countForType: 2,
            lotteryOrder: 2,
            sponcerDesc: "aaaaaa",
            sponcerName: "aaaaa",
            sponcerId: 1,
            startTime: '2018-10-31 00:34:05',
            endTime: '2018-11-30 00:34:12',
            imgUrl: 'http://aa.bb.com/foo/bar.jpg',
            isPublic: false,
        }
    }
}

{
    url: '/lottery/add',
    method: 'POST',
    data: {
        userId: 'test1',
        rewardAccount: 1,
        name: "test",
        openType: 1,
        countForType: 2,
        sponcerDesc: "aaaaaa",
        sponcerName: "aaaaa",
        sponcerId: 1,
        startTime: '2018-10-31 00:34:05',
        endTime: '2018-11-30 00:34:12',
        imgUrl: 'http://aa.bb.com/foo/bar.jpg',
    }
    success: {
        msg: 'successful',
        code: 1
    }
}

{
    url: '/lottery/edit',
    method: 'PUT',
    data: {
        userId: 'test1',
        lotteryId: 'test1',
        rewardAccount: 1,
        name: "test",
        openType: 1,
        countForType: 2,
        sponcerDesc: "aaaaaa",
        sponcerName: "aaaaa",
        sponcerId: 1,
        startTime: '2018-10-31 00:34:05',
        endTime: '2018-11-30 00:34:12',
        imgUrl: 'http://aa.bb.com/foo/bar.jpg',
    }
    success: {
        msg: 'successful',
        code: 1
    }
}

{
    url: '/lottery/join',
    method: 'POST',
    data: {
        userId: 'test1',
        lotteryId: 'test1',
    }
    success: {
        msg: 'successful',
        code: 1
    }
}


{
    url: '/address/detail',
    method: 'GET',
    data: {
        userId: 'test1',
    }
    success: {
        msg: 'successful',
        code: 1,
        data: {
          name: 'abc',
          phone: '13800000000',
          city: 'shanghai',
          detail: 'shangnan road',
          postCode: '200000',
        }
    }
}

{
    url: '/address/edit',
    method: 'PUT',
    data: {
        userId: 'test1',
        name: 'abc',
        phone: '13800000000',
        city: 'shanghai',
        detail: 'shangnan road',
        postCode: '200000',
    }
    success: {
        msg: 'successful',
        code: 1
    }
}

{
    url: '/address/add',
    method: 'POST',
    data: {
        name: 'abc',
        phone: '13800000000',
        city: 'shanghai',
        detail: 'shangnan road',
        postCode: '200000',
    }
    success: {
        msg: 'successful',
        code: 1
    }
}
