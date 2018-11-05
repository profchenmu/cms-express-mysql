basicUrl = 'http://106.14.195.192:3000/api'

header: {
    "Content-Type": "application/json",
    "X-App-Name": "appName",
    "Authorization": 'testToken'
}
{
    url: '/profile/openid&code='+ '',
    method: 'POST',
    success: {
        msg: 'successful',
        code: 1,
        data: {
            openid: result.openid,
            token: 'testToken'
        }
    }
}

{
    url: '/lottery/add',
    method: 'POST',
    data: {
        rewardAccount: 1, //奖品数量
        name: "test", //抽奖名称
        openType: 1, //开奖方式，目前就3种，1：时间 | 2：数量 | 3：自定义
        countForType: 2, //如果开奖方式为数量（2）时，字段必传
        lotteryOrder: 2, //排序
        sponcerDesc: "aaaaaa", //赞助商说明
        sponcerName: "aaaaa", //赞助商名称
        sponcerId: 1, //赞助商id
        startTime: '2018-10-31 00:34:05', // 开始时间
        endTime: '2018-11-30 00:34:12', // 结束时间
        imgUrl: 'http://aa.bb.com/foo/bar.jpg', // 图片地址
        isPublic: true, //是否公开
    },
    success: {
        msg: 'successful',
        code: 1, 
    }
}

{
    url: '/profile/basicAccount/:userId',
    method: 'GET',
    success: {
        msg: 'successful',
        code: 1,
        data: {
            lotteryJoinAccount: 2, //参加的抽奖数
            lotteryStartAccount: 2, //发起的抽奖数
            lotteryGetAccount: 2, //中奖数
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
    url: '/profile/address/detail',
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
    url: '/profile/address/edit',
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
    url: '/profile/address/add',
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
