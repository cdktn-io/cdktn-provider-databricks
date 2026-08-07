# `knowledgeAssistant` Submodule <a name="`knowledgeAssistant` Submodule" id="@cdktn/provider-databricks.knowledgeAssistant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KnowledgeAssistant <a name="KnowledgeAssistant" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant databricks_knowledge_assistant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.Initializer"></a>

```typescript
import { knowledgeAssistant } from '@cdktn/provider-databricks'

new knowledgeAssistant.KnowledgeAssistant(scope: Construct, id: string, config: KnowledgeAssistantConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig">KnowledgeAssistantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig">KnowledgeAssistantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.resetInstructions">resetInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.putProviderConfig"></a>

```typescript
public putProviderConfig(value: KnowledgeAssistantProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfig">KnowledgeAssistantProviderConfig</a>

---

##### `resetInstructions` <a name="resetInstructions" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.resetInstructions"></a>

```typescript
public resetInstructions(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KnowledgeAssistant resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.isConstruct"></a>

```typescript
import { knowledgeAssistant } from '@cdktn/provider-databricks'

knowledgeAssistant.KnowledgeAssistant.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.isTerraformElement"></a>

```typescript
import { knowledgeAssistant } from '@cdktn/provider-databricks'

knowledgeAssistant.KnowledgeAssistant.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.isTerraformResource"></a>

```typescript
import { knowledgeAssistant } from '@cdktn/provider-databricks'

knowledgeAssistant.KnowledgeAssistant.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.generateConfigForImport"></a>

```typescript
import { knowledgeAssistant } from '@cdktn/provider-databricks'

knowledgeAssistant.KnowledgeAssistant.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a KnowledgeAssistant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KnowledgeAssistant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KnowledgeAssistant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KnowledgeAssistant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.errorInfo">errorInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.experimentId">experimentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference">KnowledgeAssistantProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.instructionsInput">instructionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfig">KnowledgeAssistantProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.instructions">instructions</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `errorInfo`<sup>Required</sup> <a name="errorInfo" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.errorInfo"></a>

```typescript
public readonly errorInfo: string;
```

- *Type:* string

---

##### `experimentId`<sup>Required</sup> <a name="experimentId" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.experimentId"></a>

```typescript
public readonly experimentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.providerConfig"></a>

```typescript
public readonly providerConfig: KnowledgeAssistantProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference">KnowledgeAssistantProviderConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `instructionsInput`<sup>Optional</sup> <a name="instructionsInput" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.instructionsInput"></a>

```typescript
public readonly instructionsInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | KnowledgeAssistantProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfig">KnowledgeAssistantProviderConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.instructions"></a>

```typescript
public readonly instructions: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistant.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KnowledgeAssistantConfig <a name="KnowledgeAssistantConfig" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig.Initializer"></a>

```typescript
import { knowledgeAssistant } from '@cdktn/provider-databricks'

const knowledgeAssistantConfig: knowledgeAssistant.KnowledgeAssistantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant#description KnowledgeAssistant#description}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant#display_name KnowledgeAssistant#display_name}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig.property.instructions">instructions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant#instructions KnowledgeAssistant#instructions}. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfig">KnowledgeAssistantProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant#provider_config KnowledgeAssistant#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant#description KnowledgeAssistant#description}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant#display_name KnowledgeAssistant#display_name}.

---

##### `instructions`<sup>Optional</sup> <a name="instructions" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig.property.instructions"></a>

```typescript
public readonly instructions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant#instructions KnowledgeAssistant#instructions}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: KnowledgeAssistantProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfig">KnowledgeAssistantProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant#provider_config KnowledgeAssistant#provider_config}.

---

### KnowledgeAssistantProviderConfig <a name="KnowledgeAssistantProviderConfig" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfig.Initializer"></a>

```typescript
import { knowledgeAssistant } from '@cdktn/provider-databricks'

const knowledgeAssistantProviderConfig: knowledgeAssistant.KnowledgeAssistantProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant#workspace_id KnowledgeAssistant#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/knowledge_assistant#workspace_id KnowledgeAssistant#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### KnowledgeAssistantProviderConfigOutputReference <a name="KnowledgeAssistantProviderConfigOutputReference" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.Initializer"></a>

```typescript
import { knowledgeAssistant } from '@cdktn/provider-databricks'

new knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfig">KnowledgeAssistantProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KnowledgeAssistantProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.knowledgeAssistant.KnowledgeAssistantProviderConfig">KnowledgeAssistantProviderConfig</a>

---



