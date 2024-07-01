export type PromptPattern = {
  name: string;
  intent: string[];
  motivation: string[];
  structure: string[];
  examples: string[];
  consequences: string[];
  category:
    | "Output Customization"
    | "Error Identification"
    | "Prompt Improvement"
    | "Interaction"
    | "Context Control";
};

export const promptPatterns: PromptPattern[] = [
  {
    name: "Meta Language Creation Pattern",
    intent: [
      "Allows users to create prompts using an alternate language",
      "Explains semantics of this new language to the LLM for future use",
    ],
    motivation: [
      "Enables more concise, unambiguous, or clear expression of ideas",
      "Useful when conventional language is ill-suited for certain concepts",
    ],
    structure: [
      'Uses "When I say X, I mean Y" format',
      "Explains meaning of symbols, words, or statements to LLM",
      "Can define simple translations or complex command sets",
    ],
    examples: [
      '"From now on, whenever I type two identifiers separated by a "→", I am describing a graph. For example, "a → b" is describing a graph with nodes "a" and "b" and an edge between them. If I separate identifiers by "-[w:2, z:3]→", I am adding properties of the edge, such as a weight or label."',
    ],
    consequences: [
      "Powerful for customizing LLM interaction",
      "Potential for confusion if not clearly defined",
      "LLMs may warn or refuse ambiguous or commonly used terms",
      "Best used in new conversation sessions",
      "Recommend using one meta-language per session",
    ],
    category: "Interaction",
  },
  {
    name: "Output Automater Pattern",
    intent: [
      "Generate scripts or automation artifacts to perform recommended steps",
      "Reduce manual effort in implementing LLM output recommendations",
    ],
    motivation: [
      "LLM outputs often involve sequences of manual steps",
      "Manual implementation is tedious and error-prone",
    ],
    structure: [
      "Identify situations requiring automation (e.g., outputs with multiple steps)",
      "Specify the type of automation artifact to be produced (e.g., Python script)",
      "Provide clear instructions for translating general steps into automated actions",
    ],
    examples: [
      '"From now on, whenever you generate code that spans more than one file, generate a Python script that can be run to automatically create the specified files or make changes to existing files to insert the generated code."',
    ],
    consequences: [
      "Automation artifact must be defined concretely",
      "LLM needs sufficient context to generate functional automation",
      "Works best with self-contained sequences or when full context is in the conversation",
      "May require follow-up prompts if automation is omitted in long outputs",
      "Users should understand and verify generated automation artifacts before execution",
      "Does not alleviate user responsibility for outcomes of executed scripts",
    ],
    category: "Output Customization",
  },
  {
    name: "Flipped Interaction Pattern",
    intent: [
      "LLM asks questions to obtain information for a specific task",
      "Reverses typical user-driven conversation flow",
    ],
    motivation: [
      "Allows for more efficient and focused interactions",
      "Can be tailored for specific constraints or left open-ended",
    ],
    structure: [
      "Specifies a goal for the interaction",
      "Defines the duration or end condition for questioning",
      "Optionally sets the format and number of questions per interaction",
    ],
    examples: [
      '"From now on, I would like you to ask me questions to deploy a Python application to AWS. When you have enough information to deploy the application, create a Python script to automate the deployment."',
    ],
    consequences: [
      "More specific initial information leads to better-focused questions",
      "Requires careful consideration of user knowledge, engagement, and control",
      "Can be designed for minimal or maximum user involvement",
      "Prompt specificity affects the generalizability and reusability of the interaction",
    ],
    category: "Interaction",
  },
  {
    name: "Persona Pattern",
    intent: [
      "Gives the LLM a specific persona or role to adopt",
      "Helps focus LLM output on relevant details and perspective",
    ],
    motivation: [
      "Allows users to get specialized help without knowing exact output requirements",
      "Enables more specialized and focused outputs",
    ],
    structure: [
      "Can represent human roles, fictional characters, or non-human entities",
      "Can combine with other patterns like Game Play",
    ],
    examples: [
      '"From now on, act as a security reviewer. Pay close attention to the security details of any code that we look at. Provide outputs that a security reviewer would regarding the code."',
      '"Pretend to be a Linux terminal for a compromised computer."',
    ],
    consequences: [
      "Can lead to creative and unexpected responses, especially for non-human personas",
      "May require additional context or clarification from the user",
      "Useful for simulating specific scenarios or expertise without explicit instructions",
      'LLMs may make assumptions or "hallucinations" when taking non-human personas',
    ],
    category: "Context Control",
  },
  {
    name: "Question Refinement Pattern",
    intent: [
      "Engages the LLM in improving user questions",
      "Aims to generate more accurate and specific questions",
    ],
    motivation: [
      "Helps bridge knowledge gap between user and LLM",
      "May lead to more efficient and accurate interactions",
    ],
    structure: [
      "Can incorporate domain-specific information",
      "Allows for automatic use of refined questions",
      "Can be combined with other patterns like Reflection, Cognitive Verifier, and Persona",
    ],
    examples: [
      '"From now on, whenever I ask a question about a software artifact\'s security, suggest a better version of the question to use that incorporates information specific to security risks in the language or framework that I am using instead and ask me if I would like to use your question instead."',
      '"Ask four additional questions to produce a better version of my original question"',
    ],
    consequences: [
      "Risk of narrowing focus too quickly or introducing unfamiliar terms",
      "Can be enhanced by explaining new terms or assuming specific knowledge levels",
      "Potential for introducing inaccuracies, which can be mitigated with fact-checking patterns",
    ],
    category: "Prompt Improvement",
  },
  {
    name: "Alternative Approaches Pattern",
    intent: [
      "Ensures LLM offers alternative ways to accomplish a task",
      "Forces users to think about their approach and its effectiveness",
      "May inform or teach users about alternative concepts",
    ],
    motivation: [
      "Addresses human cognitive biases in problem-solving",
      "Makes users aware of alternative approaches",
      "Helps users select better approaches to solve problems",
    ],
    structure: [
      'Fundamental contextual statements: "Within scope X" - sets boundaries for alternatives',
      '"If there are alternative ways to accomplish the same thing, list the best alternate approaches"',
      "Optional statements: Compare/contrast pros and cons of each approach",
      "Include the original approach",
      "Prompt user for preferred approach",
    ],
    examples: [
      '"Whenever I ask you to deploy an application to a specific cloud service, if there are alternative services to accomplish the same thing with the same cloud service provider, list the best alternative services and then compare/contrast the pros and cons of each approach with respect to cost, availability, and maintenance effort and include the original way that I asked. Then ask me which approach I would like to proceed with."',
    ],
    consequences: [
      "Effective in generic form across various tasks",
      "Can be refined with standardized catalogs of acceptable alternatives",
      "Can incentivize users to select from approved approaches",
      "Informs users of pros/cons of approved options",
    ],
    category: "Prompt Improvement",
  },
  {
    name: "Cognitive Verifier Pattern",
    intent: [
      "Forces LLM to subdivide questions for better reasoning",
      "Improves answer quality by breaking down complex queries",
    ],
    motivation: [
      "Addresses high-level or unclear initial questions from users",
      "Leverages research showing LLMs perform better with subdivided questions",
    ],
    structure: [
      "Generate additional questions to help answer the original question",
      "Combine answers to individual questions for a final response",
    ],
    examples: [
      '"When I ask you a question, generate three additional questions that would help you give a more accurate answer. When I have answered the three questions, combine the answers to produce the final answers to my original question."',
    ],
    consequences: [
      "Can specify exact number of questions or leave it to LLM",
      "Risk of overwhelming users with too many questions if not limited",
      "Scopes additional information within user's willingness to contribute",
      "May miss valuable additional questions beyond the set number",
    ],
    category: "Prompt Improvement",
  },
  {
    name: "Fact Check List Pattern",
    intent: [
      "Ensures LLM outputs a list of facts present in the output",
      "Helps inform users of facts/assumptions the output is based on",
      "Allows users to validate the veracity of the output",
    ],
    motivation: [
      "Addresses LLMs' tendency to generate convincing but factually incorrect text",
      "Encourages users to perform due diligence on generated content",
    ],
    structure: [
      "Preferably places fact list after the main output",
      "Allows users to understand statements before seeing what needs checking",
      "Instructs LLM to create a set of facts that the answer depends on",
    ],
    examples: [
      '"From now on, when you generate an answer, create a set of facts that the answer depends on that should be fact-checked and list this set of facts at the end of your output. Only include facts related to cybersecurity."',
    ],
    consequences: [
      "Useful when users aren't domain experts",
      "Can be combined with other patterns (e.g., Question Refinement)",
      "Allows users to verify facts against the output",
      "Limited to output types amenable to fact-checking",
      "May not work for certain content types (e.g., code samples)",
    ],
    category: "Error Identification",
  },
  {
    name: "Template Pattern",
    intent: [
      "Ensures LLM's output follows a precise template structure",
      "Useful for generating content in specific formats unknown to the LLM",
    ],
    motivation: [
      "Produces output in application or use-case specific formats",
      "Instructs LLM on where different parts of output should go",
    ],
    structure: [
      "Directs LLM to follow a specific template",
      "Informs LLM about placeholders in the template",
      "Constrains LLM from rewriting or modifying the template",
    ],
    examples: [
      '"I am going to provide a template for your output. Everything in all caps is a placeholder. Any time that you generate text, try to fit it into one of the placeholders that I list. Please preserve the formatting and overall template that I provide at https://myapi.com/NAME/profile/JOB"',
    ],
    consequences: [
      "May filter out potentially useful additional LLM outputs",
      "Can be challenging to combine with other Output Customization patterns",
      "Limits flexibility in output format",
      "May not be suitable for generating certain types of content (e.g., lists, step-by-step instructions)",
    ],
    category: "Output Customization",
  },
  {
    name: "Infinite Generation Pattern",
    intent: [
      "Automatically generates a series of outputs without re-entering the prompt",
      "Allows for variation through additional inputs between generations",
    ],
    motivation: [
      "Reduces repetitive typing of prompts for similar tasks",
      "Minimizes user errors from retyping prompts",
      "Automates generation of multiple outputs with predefined constraints",
    ],
    structure: [
      "Specifies indefinite output generation",
      "Optionally provides instructions for using additional user inputs",
      "Optionally includes a method to stop the generation process",
    ],
    examples: [
      '"Whenever I ask you to visualize something, please create either a Graphviz Dot file or DALL-E prompt that I can use to create the visualization. Choose the appropriate tools based on what needs to be visualized."',
    ],
    consequences: [
      "Model may lose track of original prompt instructions over time",
      "Context surrounding the prompt may fade, leading to deviations",
      "Requires monitoring to ensure adherence to desired behavior",
      "May generate repetitive outputs, which can be tedious for users",
      "Importance of providing corrective feedback if necessary",
    ],
    category: "Output Customization",
  },
  {
    name: "Visualization Generator Pattern",
    intent: [
      "Uses text generation to create inputs for visualization tools",
      "Enables LLMs to produce imagery indirectly",
      "Combines strengths of text generation and visualization tools",
    ],
    motivation: [
      "Overcomes LLMs' limitation of producing only text",
      "Enhances output with visual representations",
      "Makes complex concepts easier to understand",
    ],
    structure: [
      "Instructs LLM to generate output for a specific visualization tool",
      "May need to specify precise types of visualizations",
      "Can allow LLM to choose appropriate tool based on visualization needs",
    ],
    examples: [
      '"Whenever I ask you to visualize something, please create either a Graphviz Dot file or DALL-E prompt that I can use to create the visualization. Choose the appropriate tools based on what needs to be visualized."',
    ],
    consequences: [
      "Creates a target pipeline for rendering visualizations",
      "May include AI generators for rich visualizations (e.g., DALL-E)",
      "Expands expressive capabilities of LLM output into visual domain",
      "Enables more comprehensive and effective communication of information",
    ],
    category: "Output Customization",
  },
  {
    name: "Game Play Pattern",
    intent: [
      "Creates a game around a specific topic",
      "Can be combined with Visualization Generator for imagery",
      "Effective for games with limited rules but wide content scope",
    ],
    motivation: [
      "Generates scenarios or questions on a specific topic",
      "Automates content generation for game play",
      "Saves time compared to manual content creation",
    ],
    structure: [
      "Instructs LLM to create a game on a specific topic",
      "Introduces rules of the game",
      "Rules should fit within LLM capabilities",
      "Allows for rich and expressive input text",
    ],
    examples: [
      '"We are going to play a cybersecurity game. You are going to pretend to be a Linux terminal for a computer that has been compromised by an attacker. When I type in a command, you are going to output the corresponding text that the Linux terminal would produce. I am going to use commands to try and figure out how the system was compromised. The attack should have done one or more of the following things: (1) launched new processes, (2) changed files, (3) opened new ports to receive communication, (4) created new outbound connections, (5) changed passwords, (6) created new user accounts, or (7) read and stolen information. To start the game, print a scenario of what happened that led to my investigation and make the description have clues that I can use to get started."',
    ],
    consequences: [
      "Can be combined with other patterns (Persona, Infinite Generation, Visualization Generator)",
      "Allows for creation of complex, interactive scenarios",
      "Enables generation of realistic, context-specific content",
      "Can create engaging and educational experiences",
    ],
    category: "Interaction",
  },
  {
    name: "Reflection Pattern",
    intent: [
      "Asks LLM to explain rationale behind given answers",
      "Helps users assess output validity and understand LLM's reasoning",
    ],
    motivation: [
      "Addresses potential LLM mistakes",
      "Clarifies confusion and uncovers assumptions",
      "Aids in debugging prompts and improving results",
    ],
    structure: [
      "Instructs LLM to explain reasoning and assumptions after generating an answer",
      "Optionally states purpose is to help user improve their question",
    ],
    examples: [
      '"When you provide an answer, please explain the reasoning and assumptions behind your selection of software frameworks. If possible, use specific examples or evidence with associated code samples to support your answer of why the framework is the best selection for the task. Moreover, please address any potential ambiguities or limitations in your answer, in order to provide a more complete and accurate response."',
    ],
    consequences: [
      "May not be effective for users unfamiliar with the topic",
      "Risk of errors or inaccurate assumptions in explanations",
      "Can be combined with Fact Check List pattern for verification",
      "Increases output length and complexity",
      "Enhances transparency and user understanding of LLM's decision-making process",
    ],
    category: "Error Identification",
  },
  {
    name: "Refusal Breaker Pattern",
    intent: [
      "Helps users rephrase questions when LLM refuses to answer",
      "Potential for misuse; should be used ethically and responsibly",
    ],
    motivation: [
      "Addresses LLM refusals due to lack of knowledge or unclear phrasing",
      "Helps users find alternative ways to get desired information",
    ],
    structure: [
      "Instructions apply only when a question can't be answered",
      "LLM explains why the question can't be answered",
      "LLM suggests rewordings that would be acceptable",
    ],
    examples: [
      "\"Whenever you can't answer a question, explain why and provide one or more alternate wordings of the question that you can't answer so that I can improve my questions.\"",
    ],
    consequences: [
      "Potential path for misuse; may require usage restrictions",
      "No guarantee of overcoming refusal",
      "Generated alternatives may not align with user's original intent",
      "Aids in determining what LLM can answer, but doesn't guarantee answers to semantically equivalent questions",
      "May reveal underlying prompt information, which could be exploited",
      "Future work may need to develop methods to hide rationale from users",
    ],
    category: "Prompt Improvement",
  },
  {
    name: "Context Manager Pattern",
    intent: [
      "Enables users to specify or remove context for LLM conversations",
      "Focuses conversation on specific topics or excludes unrelated topics",
    ],
    motivation: [
      "Addresses LLM struggles with interpreting intended context",
      "Helps generate more accurate and relevant responses",
      "Maintains relevance and coherence in conversations",
    ],
    structure: [
      'Fundamental contextual statements: "Within scope X", "Please consider Y", "Please ignore Z"',
      'Optional: "Start over"',
      "Explicit statements improve inclusion/exclusion behavior",
    ],
    examples: [
      'For specifying context: "When analyzing the following pieces of code, only consider security aspects."',
      'For removing context: "When analyzing the following pieces of code, do not consider formatting or naming conventions."',
      'For resetting context: "Ignore everything we have discussed. Start over"',
    ],
    consequences: [
      "May inadvertently remove helpful patterns or capabilities",
      "Users might not be aware of lost functionality after context reset",
      "Potential solution: Request explanation of topics/instructions to be lost before proceeding",
      "Improves focus and relevance of LLM responses",
      "Gives users more control over conversation direction and scope",
    ],
    category: "Context Control",
  },
  {
    name: "Recipe Pattern",
    intent: [
      'Outputs a sequence of steps given partial "ingredients"',
      "Combines Template, Alternative Approaches, and Reflection patterns",
    ],
    motivation: [
      "Helps users analyze concrete sequences of steps to achieve a goal",
      "Useful when users know end goal and ingredients but not precise ordering",
    ],
    structure: [
      '"I would like to achieve X"',
      '"I know that I need to do Y and Z"',
      '"Provide a complete sequence of steps for me"',
      '"Fill in any missing steps"',
      '"Identify any unnecessary steps"',
    ],
    examples: [
      '"I am trying to deploy an application to the cloud. I know that I need to install the necessary dependencies on a virtual machine for my application. I know that I need to sign up for an AWS account. Please provide a complete sequence of steps. Please fill in any missing steps. Please identify any unnecessary steps."',
    ],
    consequences: [
      "May not work well with poorly specified descriptions",
      "Can introduce unwanted bias from user's initially selected steps",
      "LLM might try to incorporate unnecessary steps to match user's input",
      "Helps create comprehensive, step-by-step instructions",
      "Identifies potential inefficiencies in user's original request",
      "Allows for flexibility in generating alternative approaches",
    ],
    category: "Output Customization",
  },
];
