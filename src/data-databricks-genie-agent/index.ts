/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatabricksGenieAgentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#name DataDatabricksGenieAgent#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#provider_config DataDatabricksGenieAgent#provider_config}
  */
  readonly providerConfig?: DataDatabricksGenieAgentProviderConfig;
}
export interface DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#content DataDatabricksGenieAgent#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#format DataDatabricksGenieAgent#format}
  */
  readonly format: string;
}

export function dataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerToTerraform(struct?: DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    format: cdktn.stringToTerraform(struct!.format),
  }
}


export function dataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerToHclTerraform(struct?: DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer | cdktn.IResolvable): any {
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

export class DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer | cdktn.IResolvable | undefined) {
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

export class DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference {
    return new DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentDefinitionBenchmarksQuestions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#answer DataDatabricksGenieAgent#answer}
  */
  readonly answer?: DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#evaluation_note DataDatabricksGenieAgent#evaluation_note}
  */
  readonly evaluationNote?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}
  */
  readonly question: string;
}

export function dataDatabricksGenieAgentDefinitionBenchmarksQuestionsToTerraform(struct?: DataDatabricksGenieAgentDefinitionBenchmarksQuestions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    answer: cdktn.listMapper(dataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerToTerraform, false)(struct!.answer),
    evaluation_note: cdktn.stringToTerraform(struct!.evaluationNote),
    id: cdktn.stringToTerraform(struct!.id),
    question: cdktn.stringToTerraform(struct!.question),
  }
}


export function dataDatabricksGenieAgentDefinitionBenchmarksQuestionsToHclTerraform(struct?: DataDatabricksGenieAgentDefinitionBenchmarksQuestions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    answer: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerToHclTerraform, false)(struct!.answer),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList",
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

export class DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksGenieAgentDefinitionBenchmarksQuestions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinitionBenchmarksQuestions | cdktn.IResolvable | undefined) {
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
  private _answer = new DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswerList(this, "answer", false);
  public get answer() {
    return this._answer;
  }
  public putAnswer(value: DataDatabricksGenieAgentDefinitionBenchmarksQuestionsAnswer[] | cdktn.IResolvable) {
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

export class DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentDefinitionBenchmarksQuestions[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference {
    return new DataDatabricksGenieAgentDefinitionBenchmarksQuestionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentDefinitionBenchmarks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#questions DataDatabricksGenieAgent#questions}
  */
  readonly questions?: DataDatabricksGenieAgentDefinitionBenchmarksQuestions[] | cdktn.IResolvable;
}

export function dataDatabricksGenieAgentDefinitionBenchmarksToTerraform(struct?: DataDatabricksGenieAgentDefinitionBenchmarks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    questions: cdktn.listMapper(dataDatabricksGenieAgentDefinitionBenchmarksQuestionsToTerraform, false)(struct!.questions),
  }
}


export function dataDatabricksGenieAgentDefinitionBenchmarksToHclTerraform(struct?: DataDatabricksGenieAgentDefinitionBenchmarks | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    questions: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentDefinitionBenchmarksQuestionsToHclTerraform, false)(struct!.questions),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentDefinitionBenchmarksOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksGenieAgentDefinitionBenchmarks | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinitionBenchmarks | cdktn.IResolvable | undefined) {
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
  private _questions = new DataDatabricksGenieAgentDefinitionBenchmarksQuestionsList(this, "questions", false);
  public get questions() {
    return this._questions;
  }
  public putQuestions(value: DataDatabricksGenieAgentDefinitionBenchmarksQuestions[] | cdktn.IResolvable) {
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
export interface DataDatabricksGenieAgentDefinitionConfigSampleQuestions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}
  */
  readonly question: string;
}

export function dataDatabricksGenieAgentDefinitionConfigSampleQuestionsToTerraform(struct?: DataDatabricksGenieAgentDefinitionConfigSampleQuestions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    question: cdktn.stringToTerraform(struct!.question),
  }
}


export function dataDatabricksGenieAgentDefinitionConfigSampleQuestionsToHclTerraform(struct?: DataDatabricksGenieAgentDefinitionConfigSampleQuestions | cdktn.IResolvable): any {
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

export class DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksGenieAgentDefinitionConfigSampleQuestions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinitionConfigSampleQuestions | cdktn.IResolvable | undefined) {
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

export class DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentDefinitionConfigSampleQuestions[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference {
    return new DataDatabricksGenieAgentDefinitionConfigSampleQuestionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentDefinitionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sample_questions DataDatabricksGenieAgent#sample_questions}
  */
  readonly sampleQuestions?: DataDatabricksGenieAgentDefinitionConfigSampleQuestions[] | cdktn.IResolvable;
}

export function dataDatabricksGenieAgentDefinitionConfigToTerraform(struct?: DataDatabricksGenieAgentDefinitionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    sample_questions: cdktn.listMapper(dataDatabricksGenieAgentDefinitionConfigSampleQuestionsToTerraform, false)(struct!.sampleQuestions),
  }
}


export function dataDatabricksGenieAgentDefinitionConfigToHclTerraform(struct?: DataDatabricksGenieAgentDefinitionConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    sample_questions: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentDefinitionConfigSampleQuestionsToHclTerraform, false)(struct!.sampleQuestions),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentDefinitionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksGenieAgentDefinitionConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinitionConfig | cdktn.IResolvable | undefined) {
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
  private _sampleQuestions = new DataDatabricksGenieAgentDefinitionConfigSampleQuestionsList(this, "sample_questions", false);
  public get sampleQuestions() {
    return this._sampleQuestions;
  }
  public putSampleQuestions(value: DataDatabricksGenieAgentDefinitionConfigSampleQuestions[] | cdktn.IResolvable) {
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
export interface DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#mcp_connection DataDatabricksGenieAgent#mcp_connection}
  */
  readonly mcpConnection: string;
}

export function dataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsToTerraform(struct?: DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mcp_connection: cdktn.stringToTerraform(struct!.mcpConnection),
  }
}


export function dataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsToHclTerraform(struct?: DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections | cdktn.IResolvable): any {
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

export class DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections | cdktn.IResolvable | undefined) {
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

export class DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference {
    return new DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#column DataDatabricksGenieAgent#column}
  */
  readonly column: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#enable_entity_matching DataDatabricksGenieAgent#enable_entity_matching}
  */
  readonly enableEntityMatching?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#enable_format_assistance DataDatabricksGenieAgent#enable_format_assistance}
  */
  readonly enableFormatAssistance?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#exclude DataDatabricksGenieAgent#exclude}
  */
  readonly exclude?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}
  */
  readonly synonyms?: string[];
}

export function dataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsToTerraform(struct?: DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs | cdktn.IResolvable): any {
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


export function dataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsToHclTerraform(struct?: DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs | cdktn.IResolvable): any {
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

export class DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs | cdktn.IResolvable | undefined) {
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

export class DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference {
    return new DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentDefinitionDataSourcesTables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#column_configs DataDatabricksGenieAgent#column_configs}
  */
  readonly columnConfigs?: DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}
  */
  readonly identifier: string;
}

export function dataDatabricksGenieAgentDefinitionDataSourcesTablesToTerraform(struct?: DataDatabricksGenieAgentDefinitionDataSourcesTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    column_configs: cdktn.listMapper(dataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsToTerraform, false)(struct!.columnConfigs),
    description: cdktn.stringToTerraform(struct!.description),
    identifier: cdktn.stringToTerraform(struct!.identifier),
  }
}


export function dataDatabricksGenieAgentDefinitionDataSourcesTablesToHclTerraform(struct?: DataDatabricksGenieAgentDefinitionDataSourcesTables | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    column_configs: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsToHclTerraform, false)(struct!.columnConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList",
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

export class DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksGenieAgentDefinitionDataSourcesTables | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinitionDataSourcesTables | cdktn.IResolvable | undefined) {
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
  private _columnConfigs = new DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigsList(this, "column_configs", false);
  public get columnConfigs() {
    return this._columnConfigs;
  }
  public putColumnConfigs(value: DataDatabricksGenieAgentDefinitionDataSourcesTablesColumnConfigs[] | cdktn.IResolvable) {
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

export class DataDatabricksGenieAgentDefinitionDataSourcesTablesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentDefinitionDataSourcesTables[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference {
    return new DataDatabricksGenieAgentDefinitionDataSourcesTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentDefinitionDataSourcesVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#path DataDatabricksGenieAgent#path}
  */
  readonly path: string;
}

export function dataDatabricksGenieAgentDefinitionDataSourcesVolumesToTerraform(struct?: DataDatabricksGenieAgentDefinitionDataSourcesVolumes | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    path: cdktn.stringToTerraform(struct!.path),
  }
}


export function dataDatabricksGenieAgentDefinitionDataSourcesVolumesToHclTerraform(struct?: DataDatabricksGenieAgentDefinitionDataSourcesVolumes | cdktn.IResolvable): any {
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

export class DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksGenieAgentDefinitionDataSourcesVolumes | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinitionDataSourcesVolumes | cdktn.IResolvable | undefined) {
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

export class DataDatabricksGenieAgentDefinitionDataSourcesVolumesList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentDefinitionDataSourcesVolumes[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference {
    return new DataDatabricksGenieAgentDefinitionDataSourcesVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentDefinitionDataSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#mcp_connections DataDatabricksGenieAgent#mcp_connections}
  */
  readonly mcpConnections?: DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#tables DataDatabricksGenieAgent#tables}
  */
  readonly tables?: DataDatabricksGenieAgentDefinitionDataSourcesTables[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#volumes DataDatabricksGenieAgent#volumes}
  */
  readonly volumes?: DataDatabricksGenieAgentDefinitionDataSourcesVolumes[] | cdktn.IResolvable;
}

export function dataDatabricksGenieAgentDefinitionDataSourcesToTerraform(struct?: DataDatabricksGenieAgentDefinitionDataSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mcp_connections: cdktn.listMapper(dataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsToTerraform, false)(struct!.mcpConnections),
    tables: cdktn.listMapper(dataDatabricksGenieAgentDefinitionDataSourcesTablesToTerraform, false)(struct!.tables),
    volumes: cdktn.listMapper(dataDatabricksGenieAgentDefinitionDataSourcesVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataDatabricksGenieAgentDefinitionDataSourcesToHclTerraform(struct?: DataDatabricksGenieAgentDefinitionDataSources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mcp_connections: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsToHclTerraform, false)(struct!.mcpConnections),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList",
    },
    tables: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentDefinitionDataSourcesTablesToHclTerraform, false)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentDefinitionDataSourcesTablesList",
    },
    volumes: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentDefinitionDataSourcesVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentDefinitionDataSourcesVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentDefinitionDataSourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksGenieAgentDefinitionDataSources | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinitionDataSources | cdktn.IResolvable | undefined) {
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
  private _mcpConnections = new DataDatabricksGenieAgentDefinitionDataSourcesMcpConnectionsList(this, "mcp_connections", false);
  public get mcpConnections() {
    return this._mcpConnections;
  }
  public putMcpConnections(value: DataDatabricksGenieAgentDefinitionDataSourcesMcpConnections[] | cdktn.IResolvable) {
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
  private _tables = new DataDatabricksGenieAgentDefinitionDataSourcesTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: DataDatabricksGenieAgentDefinitionDataSourcesTables[] | cdktn.IResolvable) {
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
  private _volumes = new DataDatabricksGenieAgentDefinitionDataSourcesVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataDatabricksGenieAgentDefinitionDataSourcesVolumes[] | cdktn.IResolvable) {
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
export interface DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#max DataDatabricksGenieAgent#max}
  */
  readonly max?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#min DataDatabricksGenieAgent#min}
  */
  readonly min?: string;
}

export function dataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeToTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    max: cdktn.stringToTerraform(struct!.max),
    min: cdktn.stringToTerraform(struct!.min),
  }
}


export function dataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeToHclTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange | cdktn.IResolvable): any {
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

export class DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange | cdktn.IResolvable | undefined) {
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
export interface DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#value_range DataDatabricksGenieAgent#value_range}
  */
  readonly valueRange?: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#values DataDatabricksGenieAgent#values}
  */
  readonly values?: string[];
}

export function dataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueToTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    value_range: dataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeToTerraform(struct!.valueRange),
    values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
  }
}


export function dataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueToHclTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    value_range: {
      value: dataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeToHclTerraform(struct!.valueRange),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange",
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

export class DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue | cdktn.IResolvable | undefined) {
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
  private _valueRange = new DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRangeOutputReference(this, "value_range");
  public get valueRange() {
    return this._valueRange;
  }
  public putValueRange(value: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueValueRange) {
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
export interface DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#default_value DataDatabricksGenieAgent#default_value}
  */
  readonly defaultValue?: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#description DataDatabricksGenieAgent#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#name DataDatabricksGenieAgent#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#type_hint DataDatabricksGenieAgent#type_hint}
  */
  readonly typeHint?: string;
}

export function dataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersToTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_value: dataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueToTerraform(struct!.defaultValue),
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    type_hint: cdktn.stringToTerraform(struct!.typeHint),
  }
}


export function dataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersToHclTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_value: {
      value: dataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueToHclTerraform(struct!.defaultValue),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue",
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

export class DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters | cdktn.IResolvable | undefined) {
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
  private _defaultValue = new DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValueOutputReference(this, "default_value");
  public get defaultValue() {
    return this._defaultValue;
  }
  public putDefaultValue(value: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersDefaultValue) {
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

export class DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference {
    return new DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#parameters DataDatabricksGenieAgent#parameters}
  */
  readonly parameters?: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#question DataDatabricksGenieAgent#question}
  */
  readonly question: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}
  */
  readonly sql: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#usage_guidance DataDatabricksGenieAgent#usage_guidance}
  */
  readonly usageGuidance?: string;
}

export function dataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsToTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    parameters: cdktn.listMapper(dataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersToTerraform, false)(struct!.parameters),
    question: cdktn.stringToTerraform(struct!.question),
    sql: cdktn.stringToTerraform(struct!.sql),
    usage_guidance: cdktn.stringToTerraform(struct!.usageGuidance),
  }
}


export function dataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsToHclTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls | cdktn.IResolvable): any {
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
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList",
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

export class DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls | cdktn.IResolvable | undefined) {
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
  private _parameters = new DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsParameters[] | cdktn.IResolvable) {
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

export class DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference {
    return new DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}
  */
  readonly identifier: string;
}

export function dataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftToTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    identifier: cdktn.stringToTerraform(struct!.identifier),
  }
}


export function dataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftToHclTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft): any {
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

export class DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft | undefined) {
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
export interface DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}
  */
  readonly identifier: string;
}

export function dataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightToTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    alias: cdktn.stringToTerraform(struct!.alias),
    identifier: cdktn.stringToTerraform(struct!.identifier),
  }
}


export function dataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightToHclTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight): any {
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

export class DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight | undefined) {
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
export interface DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#comment DataDatabricksGenieAgent#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}
  */
  readonly instruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#left DataDatabricksGenieAgent#left}
  */
  readonly left: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#relationship_type DataDatabricksGenieAgent#relationship_type}
  */
  readonly relationshipType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#right DataDatabricksGenieAgent#right}
  */
  readonly right: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}
  */
  readonly sql: string;
}

export function dataDatabricksGenieAgentDefinitionInstructionsJoinSpecsToTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    comment: cdktn.stringToTerraform(struct!.comment),
    id: cdktn.stringToTerraform(struct!.id),
    instruction: cdktn.stringToTerraform(struct!.instruction),
    left: dataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftToTerraform(struct!.left),
    relationship_type: cdktn.stringToTerraform(struct!.relationshipType),
    right: dataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightToTerraform(struct!.right),
    sql: cdktn.stringToTerraform(struct!.sql),
  }
}


export function dataDatabricksGenieAgentDefinitionInstructionsJoinSpecsToHclTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs | cdktn.IResolvable): any {
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
      value: dataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftToHclTerraform(struct!.left),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft",
    },
    relationship_type: {
      value: cdktn.stringToHclTerraform(struct!.relationshipType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    right: {
      value: dataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightToHclTerraform(struct!.right),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight",
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

export class DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs | cdktn.IResolvable | undefined) {
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
  private _left = new DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeftOutputReference(this, "left");
  public get left() {
    return this._left;
  }
  public putLeft(value: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsLeft) {
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
  private _right = new DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRightOutputReference(this, "right");
  public get right() {
    return this._right;
  }
  public putRight(value: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsRight) {
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

export class DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference {
    return new DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#identifier DataDatabricksGenieAgent#identifier}
  */
  readonly identifier: string;
}

export function dataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsToTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    id: cdktn.stringToTerraform(struct!.id),
    identifier: cdktn.stringToTerraform(struct!.identifier),
  }
}


export function dataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsToHclTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions | cdktn.IResolvable): any {
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

export class DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions | cdktn.IResolvable | undefined) {
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

export class DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference {
    return new DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}
  */
  readonly instruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}
  */
  readonly sql: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}
  */
  readonly synonyms?: string[];
}

export function dataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsToTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions | cdktn.IResolvable): any {
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


export function dataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsToHclTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions | cdktn.IResolvable): any {
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

export class DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions | cdktn.IResolvable | undefined) {
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

export class DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference {
    return new DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}
  */
  readonly instruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}
  */
  readonly sql: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}
  */
  readonly synonyms?: string[];
}

export function dataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersToTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters | cdktn.IResolvable): any {
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


export function dataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersToHclTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters | cdktn.IResolvable): any {
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

export class DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters | cdktn.IResolvable | undefined) {
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

export class DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference {
    return new DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#alias DataDatabricksGenieAgent#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#display_name DataDatabricksGenieAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instruction DataDatabricksGenieAgent#instruction}
  */
  readonly instruction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql DataDatabricksGenieAgent#sql}
  */
  readonly sql: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#synonyms DataDatabricksGenieAgent#synonyms}
  */
  readonly synonyms?: string[];
}

export function dataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresToTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures | cdktn.IResolvable): any {
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


export function dataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresToHclTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures | cdktn.IResolvable): any {
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

export class DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures | cdktn.IResolvable | undefined) {
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

export class DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference {
    return new DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#expressions DataDatabricksGenieAgent#expressions}
  */
  readonly expressions?: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#filters DataDatabricksGenieAgent#filters}
  */
  readonly filters?: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#measures DataDatabricksGenieAgent#measures}
  */
  readonly measures?: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures[] | cdktn.IResolvable;
}

export function dataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsToTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expressions: cdktn.listMapper(dataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsToTerraform, false)(struct!.expressions),
    filters: cdktn.listMapper(dataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersToTerraform, false)(struct!.filters),
    measures: cdktn.listMapper(dataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresToTerraform, false)(struct!.measures),
  }
}


export function dataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsToHclTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expressions: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsToHclTerraform, false)(struct!.expressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList",
    },
    filters: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersToHclTerraform, false)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList",
    },
    measures: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresToHclTerraform, false)(struct!.measures),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets | cdktn.IResolvable | undefined) {
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
  private _expressions = new DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressionsList(this, "expressions", false);
  public get expressions() {
    return this._expressions;
  }
  public putExpressions(value: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsExpressions[] | cdktn.IResolvable) {
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
  private _filters = new DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsFilters[] | cdktn.IResolvable) {
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
  private _measures = new DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasuresList(this, "measures", false);
  public get measures() {
    return this._measures;
  }
  public putMeasures(value: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsMeasures[] | cdktn.IResolvable) {
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
export interface DataDatabricksGenieAgentDefinitionInstructionsTextInstructions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#content DataDatabricksGenieAgent#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#id DataDatabricksGenieAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataDatabricksGenieAgentDefinitionInstructionsTextInstructionsToTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsTextInstructions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    content: cdktn.stringToTerraform(struct!.content),
    id: cdktn.stringToTerraform(struct!.id),
  }
}


export function dataDatabricksGenieAgentDefinitionInstructionsTextInstructionsToHclTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructionsTextInstructions | cdktn.IResolvable): any {
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

export class DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataDatabricksGenieAgentDefinitionInstructionsTextInstructions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinitionInstructionsTextInstructions | cdktn.IResolvable | undefined) {
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

export class DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList extends cdktn.ComplexList {
  public internalValue? : DataDatabricksGenieAgentDefinitionInstructionsTextInstructions[] | cdktn.IResolvable

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
  public get(index: number): DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference {
    return new DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksGenieAgentDefinitionInstructions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#example_question_sqls DataDatabricksGenieAgent#example_question_sqls}
  */
  readonly exampleQuestionSqls?: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#join_specs DataDatabricksGenieAgent#join_specs}
  */
  readonly joinSpecs?: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql_functions DataDatabricksGenieAgent#sql_functions}
  */
  readonly sqlFunctions?: DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#sql_snippets DataDatabricksGenieAgent#sql_snippets}
  */
  readonly sqlSnippets?: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#text_instructions DataDatabricksGenieAgent#text_instructions}
  */
  readonly textInstructions?: DataDatabricksGenieAgentDefinitionInstructionsTextInstructions[] | cdktn.IResolvable;
}

export function dataDatabricksGenieAgentDefinitionInstructionsToTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    example_question_sqls: cdktn.listMapper(dataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsToTerraform, false)(struct!.exampleQuestionSqls),
    join_specs: cdktn.listMapper(dataDatabricksGenieAgentDefinitionInstructionsJoinSpecsToTerraform, false)(struct!.joinSpecs),
    sql_functions: cdktn.listMapper(dataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsToTerraform, false)(struct!.sqlFunctions),
    sql_snippets: dataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsToTerraform(struct!.sqlSnippets),
    text_instructions: cdktn.listMapper(dataDatabricksGenieAgentDefinitionInstructionsTextInstructionsToTerraform, false)(struct!.textInstructions),
  }
}


export function dataDatabricksGenieAgentDefinitionInstructionsToHclTerraform(struct?: DataDatabricksGenieAgentDefinitionInstructions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    example_question_sqls: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsToHclTerraform, false)(struct!.exampleQuestionSqls),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList",
    },
    join_specs: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentDefinitionInstructionsJoinSpecsToHclTerraform, false)(struct!.joinSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList",
    },
    sql_functions: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsToHclTerraform, false)(struct!.sqlFunctions),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList",
    },
    sql_snippets: {
      value: dataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsToHclTerraform(struct!.sqlSnippets),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets",
    },
    text_instructions: {
      value: cdktn.listMapperHcl(dataDatabricksGenieAgentDefinitionInstructionsTextInstructionsToHclTerraform, false)(struct!.textInstructions),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentDefinitionInstructionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksGenieAgentDefinitionInstructions | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinitionInstructions | cdktn.IResolvable | undefined) {
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
  private _exampleQuestionSqls = new DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqlsList(this, "example_question_sqls", false);
  public get exampleQuestionSqls() {
    return this._exampleQuestionSqls;
  }
  public putExampleQuestionSqls(value: DataDatabricksGenieAgentDefinitionInstructionsExampleQuestionSqls[] | cdktn.IResolvable) {
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
  private _joinSpecs = new DataDatabricksGenieAgentDefinitionInstructionsJoinSpecsList(this, "join_specs", false);
  public get joinSpecs() {
    return this._joinSpecs;
  }
  public putJoinSpecs(value: DataDatabricksGenieAgentDefinitionInstructionsJoinSpecs[] | cdktn.IResolvable) {
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
  private _sqlFunctions = new DataDatabricksGenieAgentDefinitionInstructionsSqlFunctionsList(this, "sql_functions", false);
  public get sqlFunctions() {
    return this._sqlFunctions;
  }
  public putSqlFunctions(value: DataDatabricksGenieAgentDefinitionInstructionsSqlFunctions[] | cdktn.IResolvable) {
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
  private _sqlSnippets = new DataDatabricksGenieAgentDefinitionInstructionsSqlSnippetsOutputReference(this, "sql_snippets");
  public get sqlSnippets() {
    return this._sqlSnippets;
  }
  public putSqlSnippets(value: DataDatabricksGenieAgentDefinitionInstructionsSqlSnippets) {
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
  private _textInstructions = new DataDatabricksGenieAgentDefinitionInstructionsTextInstructionsList(this, "text_instructions", false);
  public get textInstructions() {
    return this._textInstructions;
  }
  public putTextInstructions(value: DataDatabricksGenieAgentDefinitionInstructionsTextInstructions[] | cdktn.IResolvable) {
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
export interface DataDatabricksGenieAgentDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#benchmarks DataDatabricksGenieAgent#benchmarks}
  */
  readonly benchmarks?: DataDatabricksGenieAgentDefinitionBenchmarks;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#config DataDatabricksGenieAgent#config}
  */
  readonly config?: DataDatabricksGenieAgentDefinitionConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#data_sources DataDatabricksGenieAgent#data_sources}
  */
  readonly dataSources?: DataDatabricksGenieAgentDefinitionDataSources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#instructions DataDatabricksGenieAgent#instructions}
  */
  readonly instructions?: DataDatabricksGenieAgentDefinitionInstructions;
}

export function dataDatabricksGenieAgentDefinitionToTerraform(struct?: DataDatabricksGenieAgentDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    benchmarks: dataDatabricksGenieAgentDefinitionBenchmarksToTerraform(struct!.benchmarks),
    config: dataDatabricksGenieAgentDefinitionConfigToTerraform(struct!.config),
    data_sources: dataDatabricksGenieAgentDefinitionDataSourcesToTerraform(struct!.dataSources),
    instructions: dataDatabricksGenieAgentDefinitionInstructionsToTerraform(struct!.instructions),
  }
}


export function dataDatabricksGenieAgentDefinitionToHclTerraform(struct?: DataDatabricksGenieAgentDefinition): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    benchmarks: {
      value: dataDatabricksGenieAgentDefinitionBenchmarksToHclTerraform(struct!.benchmarks),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksGenieAgentDefinitionBenchmarks",
    },
    config: {
      value: dataDatabricksGenieAgentDefinitionConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksGenieAgentDefinitionConfig",
    },
    data_sources: {
      value: dataDatabricksGenieAgentDefinitionDataSourcesToHclTerraform(struct!.dataSources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksGenieAgentDefinitionDataSources",
    },
    instructions: {
      value: dataDatabricksGenieAgentDefinitionInstructionsToHclTerraform(struct!.instructions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataDatabricksGenieAgentDefinitionInstructions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksGenieAgentDefinitionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksGenieAgentDefinition | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentDefinition | undefined) {
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
  private _benchmarks = new DataDatabricksGenieAgentDefinitionBenchmarksOutputReference(this, "benchmarks");
  public get benchmarks() {
    return this._benchmarks;
  }
  public putBenchmarks(value: DataDatabricksGenieAgentDefinitionBenchmarks) {
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
  private _config = new DataDatabricksGenieAgentDefinitionConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataDatabricksGenieAgentDefinitionConfig) {
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
  private _dataSources = new DataDatabricksGenieAgentDefinitionDataSourcesOutputReference(this, "data_sources");
  public get dataSources() {
    return this._dataSources;
  }
  public putDataSources(value: DataDatabricksGenieAgentDefinitionDataSources) {
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
  private _instructions = new DataDatabricksGenieAgentDefinitionInstructionsOutputReference(this, "instructions");
  public get instructions() {
    return this._instructions;
  }
  public putInstructions(value: DataDatabricksGenieAgentDefinitionInstructions) {
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
export interface DataDatabricksGenieAgentProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#workspace_id DataDatabricksGenieAgent#workspace_id}
  */
  readonly workspaceId?: string;
}

export function dataDatabricksGenieAgentProviderConfigToTerraform(struct?: DataDatabricksGenieAgentProviderConfig | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    workspace_id: cdktn.stringToTerraform(struct!.workspaceId),
  }
}


export function dataDatabricksGenieAgentProviderConfigToHclTerraform(struct?: DataDatabricksGenieAgentProviderConfig | cdktn.IResolvable): any {
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

export class DataDatabricksGenieAgentProviderConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDatabricksGenieAgentProviderConfig | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataDatabricksGenieAgentProviderConfig | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent databricks_genie_agent}
*/
export class DataDatabricksGenieAgent extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_genie_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatabricksGenieAgent resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksGenieAgent to import
  * @param importFromId The id of the existing DataDatabricksGenieAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksGenieAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "databricks_genie_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.142.0/docs/data-sources/genie_agent databricks_genie_agent} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksGenieAgentConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksGenieAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_genie_agent',
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
    this._name = config.name;
    this._providerConfig.internalValue = config.providerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataDatabricksGenieAgentDefinitionOutputReference(this, "definition");
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

  // name - computed: false, optional: false, required: true
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

  // provider_config - computed: false, optional: true, required: false
  private _providerConfig = new DataDatabricksGenieAgentProviderConfigOutputReference(this, "provider_config");
  public get providerConfig() {
    return this._providerConfig;
  }
  public putProviderConfig(value: DataDatabricksGenieAgentProviderConfig) {
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      provider_config: dataDatabricksGenieAgentProviderConfigToTerraform(this._providerConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_config: {
        value: dataDatabricksGenieAgentProviderConfigToHclTerraform(this._providerConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDatabricksGenieAgentProviderConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
