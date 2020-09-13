/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      admin
      lastActive
      createdRooms {
        items {
          id
          name
          group
          accessCode
          createdAt
          updatedAt
        }
        nextToken
      }
      joinedRooms {
        id
        name
        group
        accessCode
        chats {
          nextToken
        }
        users {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          school
          email
          updatedAt
        }
        admin {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          school
          email
          updatedAt
        }
        moderators {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          school
          email
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      school
      email
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        admin
        lastActive
        createdRooms {
          nextToken
        }
        joinedRooms {
          id
          name
          group
          accessCode
          createdAt
          updatedAt
        }
        createdAt
        school
        email
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
      id
      name
      group
      accessCode
      chats {
        items {
          id
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        id
        firstName
        lastName
        admin
        lastActive
        createdRooms {
          nextToken
        }
        joinedRooms {
          id
          name
          group
          accessCode
          createdAt
          updatedAt
        }
        createdAt
        school
        email
        updatedAt
      }
      admin {
        id
        firstName
        lastName
        admin
        lastActive
        createdRooms {
          nextToken
        }
        joinedRooms {
          id
          name
          group
          accessCode
          createdAt
          updatedAt
        }
        createdAt
        school
        email
        updatedAt
      }
      moderators {
        id
        firstName
        lastName
        admin
        lastActive
        createdRooms {
          nextToken
        }
        joinedRooms {
          id
          name
          group
          accessCode
          createdAt
          updatedAt
        }
        createdAt
        school
        email
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        group
        accessCode
        chats {
          nextToken
        }
        users {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          school
          email
          updatedAt
        }
        admin {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          school
          email
          updatedAt
        }
        moderators {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          school
          email
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChat = /* GraphQL */ `
  query GetChat($id: ID!) {
    getChat(id: $id) {
      id
      room {
        id
        name
        group
        accessCode
        chats {
          nextToken
        }
        users {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          school
          email
          updatedAt
        }
        admin {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          school
          email
          updatedAt
        }
        moderators {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          school
          email
          updatedAt
        }
        createdAt
        updatedAt
      }
      name
      messages {
        items {
          id
          chatID
          text
          createdAt
          type
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listChats = /* GraphQL */ `
  query ListChats(
    $filter: ModelChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        room {
          id
          name
          group
          accessCode
          createdAt
          updatedAt
        }
        name
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      user {
        id
        firstName
        lastName
        admin
        lastActive
        createdRooms {
          nextToken
        }
        joinedRooms {
          id
          name
          group
          accessCode
          createdAt
          updatedAt
        }
        createdAt
        school
        email
        updatedAt
      }
      chat {
        id
        room {
          id
          name
          group
          accessCode
          createdAt
          updatedAt
        }
        name
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatID
      text
      createdAt
      type
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          school
          email
          updatedAt
        }
        chat {
          id
          name
          createdAt
          updatedAt
        }
        chatID
        text
        createdAt
        type
        updatedAt
      }
      nextToken
    }
  }
`;
export const messageByDate = /* GraphQL */ `
  query MessageByDate(
    $type: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messageByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user {
          id
          firstName
          lastName
          admin
          lastActive
          createdAt
          school
          email
          updatedAt
        }
        chat {
          id
          name
          createdAt
          updatedAt
        }
        chatID
        text
        createdAt
        type
        updatedAt
      }
      nextToken
    }
  }
`;
