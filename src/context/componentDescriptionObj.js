export const compDescriptionsObj = {
  Accordion: {
    desc: 'A component that allows users to expand and collapse sections of content.',
    feats: [
      'Content hides when collapsed.',
      'Height animation for content.',
      'Keyboard navigation.',
    ],
    inBeta: true,
    accessibility: 'Follows WAI/ARIA accordion pattern'
  },
  DragAndDrop: {
    desc: 'A component that allows users to drag items from one column to another.',
    feats: [
      'Ability to add items per column.',
      'Items draggable from one column to another.',
      'Ability to set default items, default columns.',
      'Allows users to delete items from columns.', 
      'Optionally displays a button to add new columns when showNewColBtn prop is set to true.'
    ],
    inBeta: true, 
    accessibility: 'Accessibility features and descriptions in beta. Not yet keyboard accessible.'
  },
  GenerateOTP: {
    desc: 'A component for generating random one-time passwords(OTPs).',
    feats: [
      'Generates and regenerates random OTP.',
      'Ability to copy OTP.',
    ],
    inBeta: false, 
    accessibility: 'Keyboard accessible.'
  },
  InputFile: {
    desc: "A component for uploading files selected from users' devices.",
    feats: [
      'Can upload one file from the device storage of the user.'
    ],
    inBeta: false, 
    accessibility: 'Keyboard accessible. Appropriate labels for inputs used.'
  },
  InputForm: {
    desc: 'A form input component that accepts user name and email.',
    feats: [
      'Accepts user data, username & email, which are both required.',
      'Validates email input'
    ],
    inBeta: false, 
    accessibility:'Includes appropriate ARIA attributes and semantic HTML.'
  },
  InputOTP: {
    desc: 'A component designed for users to input one-time passwords (OTPs).',
    feats: [
      'Supports pasting from clipboard.',
      'Focused input changes based on input/deletion.',
      'Includes input validation.'
    ],
    inBeta: true, 
    accessibility: 'Includes appropriate ARIA attributes and semantic. Not fully keyboard accessible.'
  },
  SearchButton: {
    desc: 'A component that allow users to enter search queries and receive relevant page results.',
    feats: [
      'Search component input.', 
      'Responds to user interaction with styled hover and focus states.'
    ],
    inBeta: false, 
    accessibility: 'Includes appropriate ARIA attributes and semantic HTML.'
  },
  ToDoList: {
    desc: 'A component that allows user to update a list of tasks or items that need to be completed.',
    feats: [
      'Users can add new todos by typing into the input field and clicking the "Add Todo" button.',
      'Users can mark todo completion using checkmark.', 
    ],
    inBeta: false, 
    accessibility: 'Includes focus states and contrast considerations. Not fully keyboard accessible.'
  },
  Switch: {
    desc: 'A component that toggles between light and dark mode.', 
    feats: [
      'Toggle switch that toggles left and right'
    ],
    inBeta: false, 
    accessibility: 'The component uses a cursor pointer and has an accessible label. Not fully keyboard accessible.'
  },
};
