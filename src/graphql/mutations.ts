/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
      joinedRooms
      createdAt
      school
      email
      startDate
      endDate
      profileImg
      faculty
      degree
      CoursesTermOne
      CoursesTermTwo
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
      joinedRooms
      createdAt
      school
      email
      startDate
      endDate
      profileImg
      faculty
      degree
      CoursesTermOne
      CoursesTermTwo
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
      joinedRooms
      createdAt
      school
      email
      startDate
      endDate
      profileImg
      faculty
      degree
      CoursesTermOne
      CoursesTermTwo
      updatedAt
    }
  }
`;
export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
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
        joinedRooms
        createdAt
        school
        email
        startDate
        endDate
        profileImg
        faculty
        degree
        CoursesTermOne
        CoursesTermTwo
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
        joinedRooms
        createdAt
        school
        email
        startDate
        endDate
        profileImg
        faculty
        degree
        CoursesTermOne
        CoursesTermTwo
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
        joinedRooms
        createdAt
        school
        email
        startDate
        endDate
        profileImg
        faculty
        degree
        CoursesTermOne
        CoursesTermTwo
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
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
        joinedRooms
        createdAt
        school
        email
        startDate
        endDate
        profileImg
        faculty
        degree
        CoursesTermOne
        CoursesTermTwo
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
        joinedRooms
        createdAt
        school
        email
        startDate
        endDate
        profileImg
        faculty
        degree
        CoursesTermOne
        CoursesTermTwo
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
        joinedRooms
        createdAt
        school
        email
        startDate
        endDate
        profileImg
        faculty
        degree
        CoursesTermOne
        CoursesTermTwo
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
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
        joinedRooms
        createdAt
        school
        email
        startDate
        endDate
        profileImg
        faculty
        degree
        CoursesTermOne
        CoursesTermTwo
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
        joinedRooms
        createdAt
        school
        email
        startDate
        endDate
        profileImg
        faculty
        degree
        CoursesTermOne
        CoursesTermTwo
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
        joinedRooms
        createdAt
        school
        email
        startDate
        endDate
        profileImg
        faculty
        degree
        CoursesTermOne
        CoursesTermTwo
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createChat = /* GraphQL */ `
  mutation CreateChat(
    $input: CreateChatInput!
    $condition: ModelChatConditionInput
  ) {
    createChat(input: $input, condition: $condition) {
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
          joinedRooms
          createdAt
          school
          email
          startDate
          endDate
          profileImg
          faculty
          degree
          CoursesTermOne
          CoursesTermTwo
          updatedAt
        }
        admin {
          id
          firstName
          lastName
          admin
          lastActive
          joinedRooms
          createdAt
          school
          email
          startDate
          endDate
          profileImg
          faculty
          degree
          CoursesTermOne
          CoursesTermTwo
          updatedAt
        }
        moderators {
          id
          firstName
          lastName
          admin
          lastActive
          joinedRooms
          createdAt
          school
          email
          startDate
          endDate
          profileImg
          faculty
          degree
          CoursesTermOne
          CoursesTermTwo
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
export const updateChat = /* GraphQL */ `
  mutation UpdateChat(
    $input: UpdateChatInput!
    $condition: ModelChatConditionInput
  ) {
    updateChat(input: $input, condition: $condition) {
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
          joinedRooms
          createdAt
          school
          email
          startDate
          endDate
          profileImg
          faculty
          degree
          CoursesTermOne
          CoursesTermTwo
          updatedAt
        }
        admin {
          id
          firstName
          lastName
          admin
          lastActive
          joinedRooms
          createdAt
          school
          email
          startDate
          endDate
          profileImg
          faculty
          degree
          CoursesTermOne
          CoursesTermTwo
          updatedAt
        }
        moderators {
          id
          firstName
          lastName
          admin
          lastActive
          joinedRooms
          createdAt
          school
          email
          startDate
          endDate
          profileImg
          faculty
          degree
          CoursesTermOne
          CoursesTermTwo
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
export const deleteChat = /* GraphQL */ `
  mutation DeleteChat(
    $input: DeleteChatInput!
    $condition: ModelChatConditionInput
  ) {
    deleteChat(input: $input, condition: $condition) {
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
          joinedRooms
          createdAt
          school
          email
          startDate
          endDate
          profileImg
          faculty
          degree
          CoursesTermOne
          CoursesTermTwo
          updatedAt
        }
        admin {
          id
          firstName
          lastName
          admin
          lastActive
          joinedRooms
          createdAt
          school
          email
          startDate
          endDate
          profileImg
          faculty
          degree
          CoursesTermOne
          CoursesTermTwo
          updatedAt
        }
        moderators {
          id
          firstName
          lastName
          admin
          lastActive
          joinedRooms
          createdAt
          school
          email
          startDate
          endDate
          profileImg
          faculty
          degree
          CoursesTermOne
          CoursesTermTwo
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
        joinedRooms
        createdAt
        school
        email
        startDate
        endDate
        profileImg
        faculty
        degree
        CoursesTermOne
        CoursesTermTwo
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
        joinedRooms
        createdAt
        school
        email
        startDate
        endDate
        profileImg
        faculty
        degree
        CoursesTermOne
        CoursesTermTwo
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
        joinedRooms
        createdAt
        school
        email
        startDate
        endDate
        profileImg
        faculty
        degree
        CoursesTermOne
        CoursesTermTwo
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
