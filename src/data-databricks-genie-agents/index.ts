/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksGenieAgentsConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#page_size DataDatabricksGenieAgents#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#provider_config DataDatabricksGenieAgents#provider_config}
  */
  readonly providerConfig?: DataDatabricksGenieAgentsProviderConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#view DataDatabricksGenieAgents#view}
  */
  readonly view?: string;
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#content DataDatabricksGenieAgents#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#format DataDatabricksGenieAgents#format}
  */
  readonly format: string;
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    format: cdktn.stringToTerraform(struct!.format),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktn.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._format = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._format = value.format;
    }
  }

  // content - computed: true, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // format - computed: true, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference {
    return new DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#answer DataDatabricksGenieAgents#answer}
  */
  readonly answer?: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#evaluation_note DataDatabricksGenieAgents#evaluation_note}
  */
  readonly evaluationNote?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}
  */
  readonly question: string;
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    answer: cdktn.listMapper(dataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerToTerraform, false)(struct!.answer),
    evaluation_note: cdktn.stringToTerraform(struct!.evaluationNote),
    id: cdktn.stringToTerraform(struct!.id),
    question: cdktn.stringToTerraform(struct!.question),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    answer: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerToHclTerraform, false)(struct!.answer),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList",
    },
    evaluation_note: {
      value: cdktn.stringToHclTerraform(struct!.evaluationNote),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    question: {
      value: cdktn.stringToHclTerraform(struct!.question),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._answer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.answer = this._answer?.internalValue;
    }
    if (this._evaluationNote !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationNote = this._evaluationNote;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._question !== undefined) {
      hasAnyValues = true;
      internalValueResult.question = this._question;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._answer.internalValue = undefined;
      this._evaluationNote = undefined;
      this._id = undefined;
      this._question = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._answer.internalValue = value.answer;
      this._evaluationNote = value.evaluationNote;
      this._id = value.id;
      this._question = value.question;
    }
  }

  // answer - computed: true, optional: true, required: false
  private _answer = new DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswerList(this, "answer", false);
  public get answer() {
    return this._answer;
  }
  public putAnswer(value: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsAnswer[] | cdktn.IResolvable) {
    this._answer.internalValue = value;
  }
  public resetAnswer() {
    this._answer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerInput() {
    return this._answer.internalValue;
  }

  // evaluation_note - computed: true, optional: true, required: false
  private _evaluationNote?: string; 
  public get evaluationNote() {
    return this.getStringAttribute('evaluation_note');
  }
  public set evaluationNote(value: string) {
    this._evaluationNote = value;
  }
  public resetEvaluationNote() {
    this._evaluationNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationNoteInput() {
    return this._evaluationNote;
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // question - computed: true, optional: false, required: true
  private _question?: string; 
  public get question() {
    return this.getStringAttribute('question');
  }
  public set question(value: string) {
    this._question = value;
  }
  // Temporarily expose input value. Use with caution.
  public get questionInput() {
    return this._question;
  }
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference {
    return new DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#questions DataDatabricksGenieAgents#questions}
  */
  readonly questions?: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions[] | cdktn.IResolvable;
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    questions: cdktn.listMapper(dataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsToTerraform, false)(struct!.questions),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    questions: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsToHclTerraform, false)(struct!.questions),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._questions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.questions = this._questions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._questions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._questions.internalValue = value.questions;
    }
  }

  // questions - computed: true, optional: true, required: false
  private _questions = new DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestionsList(this, "questions", false);
  public get questions() {
    return this._questions;
  }
  public putQuestions(value: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksQuestions[] | cdktn.IResolvable) {
    this._questions.internalValue = value;
  }
  public resetQuestions() {
    this._questions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get questionsInput() {
    return this._questions.internalValue;
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}
  */
  readonly question: string;
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    question: cdktn.stringToTerraform(struct!.question),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    question: {
      value: cdktn.stringToHclTerraform(struct!.question),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._question !== undefined) {
      hasAnyValues = true;
      internalValueResult.question = this._question;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._question = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._question = value.question;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // question - computed: true, optional: false, required: true
  private _question?: string; 
  public get question() {
    return this.getStringAttribute('question');
  }
  public set question(value: string) {
    this._question = value;
  }
  // Temporarily expose input value. Use with caution.
  public get questionInput() {
    return this._question;
  }
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference {
    return new DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinitionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sample_questions DataDatabricksGenieAgents#sample_questions}
  */
  readonly sampleQuestions?: DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions[] | cdktn.IResolvable;
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionConfigToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sample_questions: cdktn.listMapper(dataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsToTerraform, false)(struct!.sampleQuestions),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionConfigToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sample_questions: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsToHclTerraform, false)(struct!.sampleQuestions),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinitionConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sampleQuestions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleQuestions = this._sampleQuestions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sampleQuestions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sampleQuestions.internalValue = value.sampleQuestions;
    }
  }

  // sample_questions - computed: true, optional: true, required: false
  private _sampleQuestions = new DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestionsList(this, "sample_questions", false);
  public get sampleQuestions() {
    return this._sampleQuestions;
  }
  public putSampleQuestions(value: DataDatabricksGenieAgentsGenieAgentsDefinitionConfigSampleQuestions[] | cdktn.IResolvable) {
    this._sampleQuestions.internalValue = value;
  }
  public resetSampleQuestions() {
    this._sampleQuestions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleQuestionsInput() {
    return this._sampleQuestions.internalValue;
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#mcp_connection DataDatabricksGenieAgents#mcp_connection}
  */
  readonly mcpConnection: string;
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mcp_connection: cdktn.stringToTerraform(struct!.mcpConnection),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mcp_connection: {
      value: cdktn.stringToHclTerraform(struct!.mcpConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mcpConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcpConnection = this._mcpConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mcpConnection = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mcpConnection = value.mcpConnection;
    }
  }

  // mcp_connection - computed: true, optional: false, required: true
  private _mcpConnection?: string; 
  public get mcpConnection() {
    return this.getStringAttribute('mcp_connection');
  }
  public set mcpConnection(value: string) {
    this._mcpConnection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpConnectionInput() {
    return this._mcpConnection;
  }
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference {
    return new DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#column DataDatabricksGenieAgents#column}
  */
  readonly column: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#enable_entity_matching DataDatabricksGenieAgents#enable_entity_matching}
  */
  readonly enableEntityMatching?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#enable_format_assistance DataDatabricksGenieAgents#enable_format_assistance}
  */
  readonly enableFormatAssistance?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#exclude DataDatabricksGenieAgents#exclude}
  */
  readonly exclude?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}
  */
  readonly synonyms?: string[];
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column: cdktn.stringToTerraform(struct!.column),
    description: cdktn.stringToTerraform(struct!.description),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    enable_entity_matching: cdktn.booleanToTerraform(struct!.enableEntityMatching),
    enable_format_assistance: cdktn.booleanToTerraform(struct!.enableFormatAssistance),
    exclude: cdktn.booleanToTerraform(struct!.exclude),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column: {
      value: cdktn.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_entity_matching: {
      value: cdktn.booleanToHclTerraform(struct!.enableEntityMatching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_format_assistance: {
      value: cdktn.booleanToHclTerraform(struct!.enableFormatAssistance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude: {
      value: cdktn.booleanToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._enableEntityMatching !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEntityMatching = this._enableEntityMatching;
    }
    if (this._enableFormatAssistance !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFormatAssistance = this._enableFormatAssistance;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._enableEntityMatching = undefined;
      this._enableFormatAssistance = undefined;
      this._exclude = undefined;
      this._synonyms = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._description = value.description;
      this._displayName = value.displayName;
      this._enableEntityMatching = value.enableEntityMatching;
      this._enableFormatAssistance = value.enableFormatAssistance;
      this._exclude = value.exclude;
      this._synonyms = value.synonyms;
    }
  }

  // column - computed: true, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enable_entity_matching - computed: true, optional: true, required: false
  private _enableEntityMatching?: boolean | cdktn.IResolvable; 
  public get enableEntityMatching() {
    return this.getBooleanAttribute('enable_entity_matching');
  }
  public set enableEntityMatching(value: boolean | cdktn.IResolvable) {
    this._enableEntityMatching = value;
  }
  public resetEnableEntityMatching() {
    this._enableEntityMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEntityMatchingInput() {
    return this._enableEntityMatching;
  }

  // enable_format_assistance - computed: true, optional: true, required: false
  private _enableFormatAssistance?: boolean | cdktn.IResolvable; 
  public get enableFormatAssistance() {
    return this.getBooleanAttribute('enable_format_assistance');
  }
  public set enableFormatAssistance(value: boolean | cdktn.IResolvable) {
    this._enableFormatAssistance = value;
  }
  public resetEnableFormatAssistance() {
    this._enableFormatAssistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFormatAssistanceInput() {
    return this._enableFormatAssistance;
  }

  // exclude - computed: true, optional: true, required: false
  private _exclude?: boolean | cdktn.IResolvable; 
  public get exclude() {
    return this.getBooleanAttribute('exclude');
  }
  public set exclude(value: boolean | cdktn.IResolvable) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // synonyms - computed: true, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference {
    return new DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#column_configs DataDatabricksGenieAgents#column_configs}
  */
  readonly columnConfigs?: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}
  */
  readonly identifier: string;
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_configs: cdktn.listMapper(dataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsToTerraform, false)(struct!.columnConfigs),
    description: cdktn.stringToTerraform(struct!.description),
    identifier: cdktn.stringToTerraform(struct!.identifier),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_configs: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsToHclTerraform, false)(struct!.columnConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktn.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnConfigs = this._columnConfigs?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnConfigs.internalValue = undefined;
      this._description = undefined;
      this._identifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnConfigs.internalValue = value.columnConfigs;
      this._description = value.description;
      this._identifier = value.identifier;
    }
  }

  // column_configs - computed: true, optional: true, required: false
  private _columnConfigs = new DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigsList(this, "column_configs", false);
  public get columnConfigs() {
    return this._columnConfigs;
  }
  public putColumnConfigs(value: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesColumnConfigs[] | cdktn.IResolvable) {
    this._columnConfigs.internalValue = value;
  }
  public resetColumnConfigs() {
    this._columnConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnConfigsInput() {
    return this._columnConfigs.internalValue;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // identifier - computed: true, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference {
    return new DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#path DataDatabricksGenieAgents#path}
  */
  readonly path: string;
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktn.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._path = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._path = value.path;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // path - computed: true, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference {
    return new DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#mcp_connections DataDatabricksGenieAgents#mcp_connections}
  */
  readonly mcpConnections?: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#tables DataDatabricksGenieAgents#tables}
  */
  readonly tables?: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#volumes DataDatabricksGenieAgents#volumes}
  */
  readonly volumes?: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes[] | cdktn.IResolvable;
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mcp_connections: cdktn.listMapper(dataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsToTerraform, false)(struct!.mcpConnections),
    tables: cdktn.listMapper(dataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesToTerraform, false)(struct!.tables),
    volumes: cdktn.listMapper(dataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mcp_connections: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsToHclTerraform, false)(struct!.mcpConnections),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList",
    },
    tables: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesToHclTerraform, false)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList",
    },
    volumes: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mcpConnections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcpConnections = this._mcpConnections?.internalValue;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mcpConnections.internalValue = undefined;
      this._tables.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mcpConnections.internalValue = value.mcpConnections;
      this._tables.internalValue = value.tables;
      this._volumes.internalValue = value.volumes;
    }
  }

  // mcp_connections - computed: true, optional: true, required: false
  private _mcpConnections = new DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnectionsList(this, "mcp_connections", false);
  public get mcpConnections() {
    return this._mcpConnections;
  }
  public putMcpConnections(value: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesMcpConnections[] | cdktn.IResolvable) {
    this._mcpConnections.internalValue = value;
  }
  public resetMcpConnections() {
    this._mcpConnections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpConnectionsInput() {
    return this._mcpConnections.internalValue;
  }

  // tables - computed: true, optional: true, required: false
  private _tables = new DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesTables[] | cdktn.IResolvable) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }

  // volumes - computed: true, optional: true, required: false
  private _volumes = new DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesVolumes[] | cdktn.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#max DataDatabricksGenieAgents#max}
  */
  readonly max?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#min DataDatabricksGenieAgents#min}
  */
  readonly min?: string;
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.stringToTerraform(struct!.max),
    min: cdktn.stringToTerraform(struct!.min),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    max: {
      value: cdktn.stringToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min: {
      value: cdktn.stringToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: true, optional: true, required: false
  private _max?: string; 
  public get max() {
    return this.getStringAttribute('max');
  }
  public set max(value: string) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: true, optional: true, required: false
  private _min?: string; 
  public get min() {
    return this.getStringAttribute('min');
  }
  public set min(value: string) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#value_range DataDatabricksGenieAgents#value_range}
  */
  readonly valueRange?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#values DataDatabricksGenieAgents#values}
  */
  readonly values?: string[];
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value_range: dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeToTerraform(struct!.valueRange),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value_range: {
      value: dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeToHclTerraform(struct!.valueRange),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange",
    },
    values: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueRange = this._valueRange?.internalValue;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueRange.internalValue = undefined;
      this._values = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueRange.internalValue = value.valueRange;
      this._values = value.values;
    }
  }

  // value_range - computed: true, optional: true, required: false
  private _valueRange = new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference(this, "value_range");
  public get valueRange() {
    return this._valueRange;
  }
  public putValueRange(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange) {
    this._valueRange.internalValue = value;
  }
  public resetValueRange() {
    this._valueRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueRangeInput() {
    return this._valueRange.internalValue;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#default_value DataDatabricksGenieAgents#default_value}
  */
  readonly defaultValue?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#description DataDatabricksGenieAgents#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#name DataDatabricksGenieAgents#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#type_hint DataDatabricksGenieAgents#type_hint}
  */
  readonly typeHint?: string;
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_value: dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueToTerraform(struct!.defaultValue),
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    type_hint: cdktn.stringToTerraform(struct!.typeHint),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_value: {
      value: dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueToHclTerraform(struct!.defaultValue),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_hint: {
      value: cdktn.stringToHclTerraform(struct!.typeHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._typeHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeHint = this._typeHint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue.internalValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._typeHint = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue.internalValue = value.defaultValue;
      this._description = value.description;
      this._name = value.name;
      this._typeHint = value.typeHint;
    }
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue = new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference(this, "default_value");
  public get defaultValue() {
    return this._defaultValue;
  }
  public putDefaultValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue) {
    this._defaultValue.internalValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue.internalValue;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // name - computed: true, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type_hint - computed: true, optional: true, required: false
  private _typeHint?: string; 
  public get typeHint() {
    return this.getStringAttribute('type_hint');
  }
  public set typeHint(value: string) {
    this._typeHint = value;
  }
  public resetTypeHint() {
    this._typeHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeHintInput() {
    return this._typeHint;
  }
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference {
    return new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#parameters DataDatabricksGenieAgents#parameters}
  */
  readonly parameters?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#question DataDatabricksGenieAgents#question}
  */
  readonly question: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}
  */
  readonly sql: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#usage_guidance DataDatabricksGenieAgents#usage_guidance}
  */
  readonly usageGuidance?: string;
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    parameters: cdktn.listMapper(dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersToTerraform, false)(struct!.parameters),
    question: cdktn.stringToTerraform(struct!.question),
    sql: cdktn.stringToTerraform(struct!.sql),
    usage_guidance: cdktn.stringToTerraform(struct!.usageGuidance),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList",
    },
    question: {
      value: cdktn.stringToHclTerraform(struct!.question),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql: {
      value: cdktn.stringToHclTerraform(struct!.sql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usage_guidance: {
      value: cdktn.stringToHclTerraform(struct!.usageGuidance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._question !== undefined) {
      hasAnyValues = true;
      internalValueResult.question = this._question;
    }
    if (this._sql !== undefined) {
      hasAnyValues = true;
      internalValueResult.sql = this._sql;
    }
    if (this._usageGuidance !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageGuidance = this._usageGuidance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._parameters.internalValue = undefined;
      this._question = undefined;
      this._sql = undefined;
      this._usageGuidance = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._parameters.internalValue = value.parameters;
      this._question = value.question;
      this._sql = value.sql;
      this._usageGuidance = value.usageGuidance;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters = new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsParameters[] | cdktn.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // question - computed: true, optional: false, required: true
  private _question?: string; 
  public get question() {
    return this.getStringAttribute('question');
  }
  public set question(value: string) {
    this._question = value;
  }
  // Temporarily expose input value. Use with caution.
  public get questionInput() {
    return this._question;
  }

  // sql - computed: true, optional: false, required: true
  private _sql?: string; 
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql;
  }

  // usage_guidance - computed: true, optional: true, required: false
  private _usageGuidance?: string; 
  public get usageGuidance() {
    return this.getStringAttribute('usage_guidance');
  }
  public set usageGuidance(value: string) {
    this._usageGuidance = value;
  }
  public resetUsageGuidance() {
    this._usageGuidance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageGuidanceInput() {
    return this._usageGuidance;
  }
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference {
    return new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}
  */
  readonly identifier: string;
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    identifier: cdktn.stringToTerraform(struct!.identifier),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alias: {
      value: cdktn.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktn.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alias = undefined;
      this._identifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alias = value.alias;
      this._identifier = value.identifier;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // identifier - computed: true, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}
  */
  readonly identifier: string;
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    identifier: cdktn.stringToTerraform(struct!.identifier),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alias: {
      value: cdktn.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktn.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alias = undefined;
      this._identifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alias = value.alias;
      this._identifier = value.identifier;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // identifier - computed: true, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#comment DataDatabricksGenieAgents#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}
  */
  readonly instruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#left DataDatabricksGenieAgents#left}
  */
  readonly left: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#relationship_type DataDatabricksGenieAgents#relationship_type}
  */
  readonly relationshipType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#right DataDatabricksGenieAgents#right}
  */
  readonly right: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}
  */
  readonly sql: string;
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comment: cdktn.stringToTerraform(struct!.comment),
    id: cdktn.stringToTerraform(struct!.id),
    instruction: cdktn.stringToTerraform(struct!.instruction),
    left: dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftToTerraform(struct!.left),
    relationship_type: cdktn.stringToTerraform(struct!.relationshipType),
    right: dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightToTerraform(struct!.right),
    sql: cdktn.stringToTerraform(struct!.sql),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    comment: {
      value: cdktn.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instruction: {
      value: cdktn.stringToHclTerraform(struct!.instruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    left: {
      value: dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftToHclTerraform(struct!.left),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft",
    },
    relationship_type: {
      value: cdktn.stringToHclTerraform(struct!.relationshipType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    right: {
      value: dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightToHclTerraform(struct!.right),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight",
    },
    sql: {
      value: cdktn.stringToHclTerraform(struct!.sql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._instruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.instruction = this._instruction;
    }
    if (this._left?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.left = this._left?.internalValue;
    }
    if (this._relationshipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.relationshipType = this._relationshipType;
    }
    if (this._right?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.right = this._right?.internalValue;
    }
    if (this._sql !== undefined) {
      hasAnyValues = true;
      internalValueResult.sql = this._sql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._id = undefined;
      this._instruction = undefined;
      this._left.internalValue = undefined;
      this._relationshipType = undefined;
      this._right.internalValue = undefined;
      this._sql = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._id = value.id;
      this._instruction = value.instruction;
      this._left.internalValue = value.left;
      this._relationshipType = value.relationshipType;
      this._right.internalValue = value.right;
      this._sql = value.sql;
    }
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instruction - computed: true, optional: true, required: false
  private _instruction?: string; 
  public get instruction() {
    return this.getStringAttribute('instruction');
  }
  public set instruction(value: string) {
    this._instruction = value;
  }
  public resetInstruction() {
    this._instruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionInput() {
    return this._instruction;
  }

  // left - computed: true, optional: false, required: true
  private _left = new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeftOutputReference(this, "left");
  public get left() {
    return this._left;
  }
  public putLeft(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsLeft) {
    this._left.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leftInput() {
    return this._left.internalValue;
  }

  // relationship_type - computed: true, optional: true, required: false
  private _relationshipType?: string; 
  public get relationshipType() {
    return this.getStringAttribute('relationship_type');
  }
  public set relationshipType(value: string) {
    this._relationshipType = value;
  }
  public resetRelationshipType() {
    this._relationshipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationshipTypeInput() {
    return this._relationshipType;
  }

  // right - computed: true, optional: false, required: true
  private _right = new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRightOutputReference(this, "right");
  public get right() {
    return this._right;
  }
  public putRight(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsRight) {
    this._right.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rightInput() {
    return this._right.internalValue;
  }

  // sql - computed: true, optional: false, required: true
  private _sql?: string; 
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql;
  }
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference {
    return new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#identifier DataDatabricksGenieAgents#identifier}
  */
  readonly identifier: string;
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    identifier: cdktn.stringToTerraform(struct!.identifier),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktn.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._identifier = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._identifier = value.identifier;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identifier - computed: true, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference {
    return new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}
  */
  readonly instruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}
  */
  readonly sql: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}
  */
  readonly synonyms?: string[];
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    id: cdktn.stringToTerraform(struct!.id),
    instruction: cdktn.stringToTerraform(struct!.instruction),
    sql: cdktn.stringToTerraform(struct!.sql),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alias: {
      value: cdktn.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instruction: {
      value: cdktn.stringToHclTerraform(struct!.instruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql: {
      value: cdktn.stringToHclTerraform(struct!.sql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._instruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.instruction = this._instruction;
    }
    if (this._sql !== undefined) {
      hasAnyValues = true;
      internalValueResult.sql = this._sql;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._displayName = undefined;
      this._id = undefined;
      this._instruction = undefined;
      this._sql = undefined;
      this._synonyms = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._displayName = value.displayName;
      this._id = value.id;
      this._instruction = value.instruction;
      this._sql = value.sql;
      this._synonyms = value.synonyms;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instruction - computed: true, optional: true, required: false
  private _instruction?: string; 
  public get instruction() {
    return this.getStringAttribute('instruction');
  }
  public set instruction(value: string) {
    this._instruction = value;
  }
  public resetInstruction() {
    this._instruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionInput() {
    return this._instruction;
  }

  // sql - computed: true, optional: false, required: true
  private _sql?: string; 
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql;
  }

  // synonyms - computed: true, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference {
    return new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}
  */
  readonly instruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}
  */
  readonly sql: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}
  */
  readonly synonyms?: string[];
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    display_name: cdktn.stringToTerraform(struct!.displayName),
    id: cdktn.stringToTerraform(struct!.id),
    instruction: cdktn.stringToTerraform(struct!.instruction),
    sql: cdktn.stringToTerraform(struct!.sql),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instruction: {
      value: cdktn.stringToHclTerraform(struct!.instruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql: {
      value: cdktn.stringToHclTerraform(struct!.sql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._instruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.instruction = this._instruction;
    }
    if (this._sql !== undefined) {
      hasAnyValues = true;
      internalValueResult.sql = this._sql;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._id = undefined;
      this._instruction = undefined;
      this._sql = undefined;
      this._synonyms = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._id = value.id;
      this._instruction = value.instruction;
      this._sql = value.sql;
      this._synonyms = value.synonyms;
    }
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instruction - computed: true, optional: true, required: false
  private _instruction?: string; 
  public get instruction() {
    return this.getStringAttribute('instruction');
  }
  public set instruction(value: string) {
    this._instruction = value;
  }
  public resetInstruction() {
    this._instruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionInput() {
    return this._instruction;
  }

  // sql - computed: true, optional: false, required: true
  private _sql?: string; 
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql;
  }

  // synonyms - computed: true, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference {
    return new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#alias DataDatabricksGenieAgents#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#display_name DataDatabricksGenieAgents#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instruction DataDatabricksGenieAgents#instruction}
  */
  readonly instruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql DataDatabricksGenieAgents#sql}
  */
  readonly sql: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#synonyms DataDatabricksGenieAgents#synonyms}
  */
  readonly synonyms?: string[];
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    id: cdktn.stringToTerraform(struct!.id),
    instruction: cdktn.stringToTerraform(struct!.instruction),
    sql: cdktn.stringToTerraform(struct!.sql),
    synonyms: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.synonyms),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    alias: {
      value: cdktn.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instruction: {
      value: cdktn.stringToHclTerraform(struct!.instruction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql: {
      value: cdktn.stringToHclTerraform(struct!.sql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonyms: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._instruction !== undefined) {
      hasAnyValues = true;
      internalValueResult.instruction = this._instruction;
    }
    if (this._sql !== undefined) {
      hasAnyValues = true;
      internalValueResult.sql = this._sql;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._displayName = undefined;
      this._id = undefined;
      this._instruction = undefined;
      this._sql = undefined;
      this._synonyms = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._displayName = value.displayName;
      this._id = value.id;
      this._instruction = value.instruction;
      this._sql = value.sql;
      this._synonyms = value.synonyms;
    }
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instruction - computed: true, optional: true, required: false
  private _instruction?: string; 
  public get instruction() {
    return this.getStringAttribute('instruction');
  }
  public set instruction(value: string) {
    this._instruction = value;
  }
  public resetInstruction() {
    this._instruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionInput() {
    return this._instruction;
  }

  // sql - computed: true, optional: false, required: true
  private _sql?: string; 
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql;
  }

  // synonyms - computed: true, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return this.getListAttribute('synonyms');
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
  }
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference {
    return new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#expressions DataDatabricksGenieAgents#expressions}
  */
  readonly expressions?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#filters DataDatabricksGenieAgents#filters}
  */
  readonly filters?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#measures DataDatabricksGenieAgents#measures}
  */
  readonly measures?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures[] | cdktn.IResolvable;
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expressions: cdktn.listMapper(dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsToTerraform, false)(struct!.expressions),
    filters: cdktn.listMapper(dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersToTerraform, false)(struct!.filters),
    measures: cdktn.listMapper(dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresToTerraform, false)(struct!.measures),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expressions: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsToHclTerraform, false)(struct!.expressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList",
    },
    filters: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList",
    },
    measures: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresToHclTerraform, false)(struct!.measures),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions?.internalValue;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._measures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.measures = this._measures?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expressions.internalValue = undefined;
      this._filters.internalValue = undefined;
      this._measures.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expressions.internalValue = value.expressions;
      this._filters.internalValue = value.filters;
      this._measures.internalValue = value.measures;
    }
  }

  // expressions - computed: true, optional: true, required: false
  private _expressions = new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressionsList(this, "expressions", false);
  public get expressions() {
    return this._expressions;
  }
  public putExpressions(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsExpressions[] | cdktn.IResolvable) {
    this._expressions.internalValue = value;
  }
  public resetExpressions() {
    this._expressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions.internalValue;
  }

  // filters - computed: true, optional: true, required: false
  private _filters = new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsFilters[] | cdktn.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // measures - computed: true, optional: true, required: false
  private _measures = new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasuresList(this, "measures", false);
  public get measures() {
    return this._measures;
  }
  public putMeasures(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsMeasures[] | cdktn.IResolvable) {
    this._measures.internalValue = value;
  }
  public resetMeasures() {
    this._measures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measuresInput() {
    return this._measures.internalValue;
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#content DataDatabricksGenieAgents#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#id DataDatabricksGenieAgents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    content: {
      value: cdktn.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktn.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._id = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._id = value.id;
    }
  }

  // content - computed: true, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference {
    return new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#example_question_sqls DataDatabricksGenieAgents#example_question_sqls}
  */
  readonly exampleQuestionSqls?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#join_specs DataDatabricksGenieAgents#join_specs}
  */
  readonly joinSpecs?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql_functions DataDatabricksGenieAgents#sql_functions}
  */
  readonly sqlFunctions?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#sql_snippets DataDatabricksGenieAgents#sql_snippets}
  */
  readonly sqlSnippets?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#text_instructions DataDatabricksGenieAgents#text_instructions}
  */
  readonly textInstructions?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions[] | cdktn.IResolvable;
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    example_question_sqls: cdktn.listMapper(dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsToTerraform, false)(struct!.exampleQuestionSqls),
    join_specs: cdktn.listMapper(dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsToTerraform, false)(struct!.joinSpecs),
    sql_functions: cdktn.listMapper(dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsToTerraform, false)(struct!.sqlFunctions),
    sql_snippets: dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsToTerraform(struct!.sqlSnippets),
    text_instructions: cdktn.listMapper(dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsToTerraform, false)(struct!.textInstructions),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    example_question_sqls: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsToHclTerraform, false)(struct!.exampleQuestionSqls),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList",
    },
    join_specs: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsToHclTerraform, false)(struct!.joinSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList",
    },
    sql_functions: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsToHclTerraform, false)(struct!.sqlFunctions),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList",
    },
    sql_snippets: {
      value: dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsToHclTerraform(struct!.sqlSnippets),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets",
    },
    text_instructions: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsToHclTerraform, false)(struct!.textInstructions),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exampleQuestionSqls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exampleQuestionSqls = this._exampleQuestionSqls?.internalValue;
    }
    if (this._joinSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinSpecs = this._joinSpecs?.internalValue;
    }
    if (this._sqlFunctions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlFunctions = this._sqlFunctions?.internalValue;
    }
    if (this._sqlSnippets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlSnippets = this._sqlSnippets?.internalValue;
    }
    if (this._textInstructions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textInstructions = this._textInstructions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exampleQuestionSqls.internalValue = undefined;
      this._joinSpecs.internalValue = undefined;
      this._sqlFunctions.internalValue = undefined;
      this._sqlSnippets.internalValue = undefined;
      this._textInstructions.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exampleQuestionSqls.internalValue = value.exampleQuestionSqls;
      this._joinSpecs.internalValue = value.joinSpecs;
      this._sqlFunctions.internalValue = value.sqlFunctions;
      this._sqlSnippets.internalValue = value.sqlSnippets;
      this._textInstructions.internalValue = value.textInstructions;
    }
  }

  // example_question_sqls - computed: true, optional: true, required: false
  private _exampleQuestionSqls = new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqlsList(this, "example_question_sqls", false);
  public get exampleQuestionSqls() {
    return this._exampleQuestionSqls;
  }
  public putExampleQuestionSqls(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsExampleQuestionSqls[] | cdktn.IResolvable) {
    this._exampleQuestionSqls.internalValue = value;
  }
  public resetExampleQuestionSqls() {
    this._exampleQuestionSqls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleQuestionSqlsInput() {
    return this._exampleQuestionSqls.internalValue;
  }

  // join_specs - computed: true, optional: true, required: false
  private _joinSpecs = new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecsList(this, "join_specs", false);
  public get joinSpecs() {
    return this._joinSpecs;
  }
  public putJoinSpecs(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsJoinSpecs[] | cdktn.IResolvable) {
    this._joinSpecs.internalValue = value;
  }
  public resetJoinSpecs() {
    this._joinSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinSpecsInput() {
    return this._joinSpecs.internalValue;
  }

  // sql_functions - computed: true, optional: true, required: false
  private _sqlFunctions = new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctionsList(this, "sql_functions", false);
  public get sqlFunctions() {
    return this._sqlFunctions;
  }
  public putSqlFunctions(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlFunctions[] | cdktn.IResolvable) {
    this._sqlFunctions.internalValue = value;
  }
  public resetSqlFunctions() {
    this._sqlFunctions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlFunctionsInput() {
    return this._sqlFunctions.internalValue;
  }

  // sql_snippets - computed: true, optional: true, required: false
  private _sqlSnippets = new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippetsOutputReference(this, "sql_snippets");
  public get sqlSnippets() {
    return this._sqlSnippets;
  }
  public putSqlSnippets(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsSqlSnippets) {
    this._sqlSnippets.internalValue = value;
  }
  public resetSqlSnippets() {
    this._sqlSnippets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlSnippetsInput() {
    return this._sqlSnippets.internalValue;
  }

  // text_instructions - computed: true, optional: true, required: false
  private _textInstructions = new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructionsList(this, "text_instructions", false);
  public get textInstructions() {
    return this._textInstructions;
  }
  public putTextInstructions(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsTextInstructions[] | cdktn.IResolvable) {
    this._textInstructions.internalValue = value;
  }
  public resetTextInstructions() {
    this._textInstructions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInstructionsInput() {
    return this._textInstructions.internalValue;
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#benchmarks DataDatabricksGenieAgents#benchmarks}
  */
  readonly benchmarks?: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#config DataDatabricksGenieAgents#config}
  */
  readonly config?: DataDatabricksGenieAgentsGenieAgentsDefinitionConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#data_sources DataDatabricksGenieAgents#data_sources}
  */
  readonly dataSources?: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#instructions DataDatabricksGenieAgents#instructions}
  */
  readonly instructions?: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions;
}

export function dataDatabricksGenieAgentsGenieAgentsDefinitionToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    benchmarks: dataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksToTerraform(struct!.benchmarks),
    config: dataDatabricksGenieAgentsGenieAgentsDefinitionConfigToTerraform(struct!.config),
    data_sources: dataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesToTerraform(struct!.dataSources),
    instructions: dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsToTerraform(struct!.instructions),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsDefinitionToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    benchmarks: {
      value: dataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksToHclTerraform(struct!.benchmarks),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks",
    },
    config: {
      value: dataDatabricksGenieAgentsGenieAgentsDefinitionConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsDefinitionConfig",
    },
    data_sources: {
      value: dataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesToHclTerraform(struct!.dataSources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources",
    },
    instructions: {
      value: dataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsToHclTerraform(struct!.instructions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._benchmarks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.benchmarks = this._benchmarks?.internalValue;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._dataSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSources = this._dataSources?.internalValue;
    }
    if (this._instructions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instructions = this._instructions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._benchmarks.internalValue = undefined;
      this._config.internalValue = undefined;
      this._dataSources.internalValue = undefined;
      this._instructions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._benchmarks.internalValue = value.benchmarks;
      this._config.internalValue = value.config;
      this._dataSources.internalValue = value.dataSources;
      this._instructions.internalValue = value.instructions;
    }
  }

  // benchmarks - computed: true, optional: true, required: false
  private _benchmarks = new DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarksOutputReference(this, "benchmarks");
  public get benchmarks() {
    return this._benchmarks;
  }
  public putBenchmarks(value: DataDatabricksGenieAgentsGenieAgentsDefinitionBenchmarks) {
    this._benchmarks.internalValue = value;
  }
  public resetBenchmarks() {
    this._benchmarks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get benchmarksInput() {
    return this._benchmarks.internalValue;
  }

  // config - computed: true, optional: true, required: false
  private _config = new DataDatabricksGenieAgentsGenieAgentsDefinitionConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataDatabricksGenieAgentsGenieAgentsDefinitionConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // data_sources - computed: true, optional: true, required: false
  private _dataSources = new DataDatabricksGenieAgentsGenieAgentsDefinitionDataSourcesOutputReference(this, "data_sources");
  public get dataSources() {
    return this._dataSources;
  }
  public putDataSources(value: DataDatabricksGenieAgentsGenieAgentsDefinitionDataSources) {
    this._dataSources.internalValue = value;
  }
  public resetDataSources() {
    this._dataSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourcesInput() {
    return this._dataSources.internalValue;
  }

  // instructions - computed: true, optional: true, required: false
  private _instructions = new DataDatabricksGenieAgentsGenieAgentsDefinitionInstructionsOutputReference(this, "instructions");
  public get instructions() {
    return this._instructions;
  }
  public putInstructions(value: DataDatabricksGenieAgentsGenieAgentsDefinitionInstructions) {
    this._instructions.internalValue = value;
  }
  public resetInstructions() {
    this._instructions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionsInput() {
    return this._instructions.internalValue;
  }
}
export interface DataDatabricksGenieAgentsGenieAgentsProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#workspace_id DataDatabricksGenieAgents#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksGenieAgentsGenieAgentsProviderConfigToTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsProviderConfigToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgentsProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    workspace_id: {
      value: cdktn.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgentsProviderConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgentsProviderConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workspaceId = value.workspaceId;
    }
  }

  // workspace_id - computed: true, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}
export interface DataDatabricksGenieAgentsGenieAgents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#name DataDatabricksGenieAgents#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#provider_config DataDatabricksGenieAgents#provider_config}
  */
  readonly providerConfig?: DataDatabricksGenieAgentsGenieAgentsProviderConfig;
}

export function dataDatabricksGenieAgentsGenieAgentsToTerraform(struct?: DataDatabricksGenieAgentsGenieAgents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    provider_config: dataDatabricksGenieAgentsGenieAgentsProviderConfigToTerraform(struct!.providerConfig),
  }
}


export function dataDatabricksGenieAgentsGenieAgentsToHclTerraform(struct?: DataDatabricksGenieAgentsGenieAgents): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_config: {
      value: dataDatabricksGenieAgentsGenieAgentsProviderConfigToHclTerraform(struct!.providerConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksGenieAgentsGenieAgentsProviderConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsGenieAgentsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksGenieAgentsGenieAgents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._providerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerConfig = this._providerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsGenieAgents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._providerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._providerConfig.internalValue = value.providerConfig;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataDatabricksGenieAgentsGenieAgentsDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // effective_parent_path - computed: true, optional: false, required: false
  public get effectiveParentPath() {
    return this.getStringAttribute('effective_parent_path');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // name - computed: true, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent_path - computed: true, optional: false, required: false
  public get parentPath() {
    return this.getStringAttribute('parent_path');
  }

  // provider_config - computed: true, optional: true, required: false
  private _providerConfig = new DataDatabricksGenieAgentsGenieAgentsProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksGenieAgentsGenieAgentsProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // warehouse_id - computed: true, optional: false, required: false
  public get warehouseId() {
    return this.getStringAttribute('warehouse_id');
  }
}

export class DataDatabricksGenieAgentsGenieAgentsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentsGenieAgents[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksGenieAgentsGenieAgentsOutputReference {
    return new DataDatabricksGenieAgentsGenieAgentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentsProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#workspace_id DataDatabricksGenieAgents#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksGenieAgentsProviderConfigToTerraform(struct?: DataDatabricksGenieAgentsProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksGenieAgentsProviderConfigToHclTerraform(struct?: DataDatabricksGenieAgentsProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    workspace_id: {
      value: cdktn.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentsProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksGenieAgentsProviderConfig | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksGenieAgentsProviderConfig | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workspaceId = value.workspaceId;
    }
  }

  // workspace_id - computed: true, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents databricks_genie_agents}
*/
export class DataDatabricksGenieAgents extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_genie_agents";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksGenieAgents resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksGenieAgents to import
  * @param importFromId The id of the existing DataDatabricksGenieAgents that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksGenieAgents to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_genie_agents", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agents databricks_genie_agents} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksGenieAgentsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksGenieAgentsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_genie_agents',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.142.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._pageSize = config.pageSize;
    this._providerConfig.internalValue = config.providerConfig;
    this._view = config.view;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // genie_agents - computed: true, optional: false, required: false
  private _genieAgents = new DataDatabricksGenieAgentsGenieAgentsList(this, "genie_agents", false);
  public get genieAgents() {
    return this._genieAgents;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksGenieAgentsProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksGenieAgentsProviderConfig) {
    this._providerConfig.internalValue = value;
  }
  public resetProviderConfig() {
    this._providerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConfigInput() {
    return this._providerConfig.internalValue;
  }

  // view - computed: false, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      page_size: cdktn.numberToTerraform(this._pageSize),
      provider_config: dataDatabricksGenieAgentsProviderConfigToTerraform(this._providerConfig.internalValue),
      view: cdktn.stringToTerraform(this._view),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      page_size: {
        value: cdktn.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provider_config: {
        value: dataDatabricksGenieAgentsProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksGenieAgentsProviderConfig",
      },
      view: {
        value: cdktn.stringToHclTerraform(this._view),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
