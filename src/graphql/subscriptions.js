/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const sendMessage = /* GraphQL */ `
  subscription SendMessage($chatID: String!) {
    sendMessage(chatID: $chatID) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom {
    onCreateRoom {
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
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom {
    onUpdateRoom {
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
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom {
    onDeleteRoom {
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
export const onCreateChat = /* GraphQL */ `
  subscription OnCreateChat {
    onCreateChat {
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
export const onUpdateChat = /* GraphQL */ `
  subscription OnUpdateChat {
    onUpdateChat {
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
export const onDeleteChat = /* GraphQL */ `
  subscription OnDeleteChat {
    onDeleteChat {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
