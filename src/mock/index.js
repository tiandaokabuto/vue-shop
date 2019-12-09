import Mock from 'mockjs'
import test from './test'

Mock.mock(/\/api\/test/, 'get', test)
