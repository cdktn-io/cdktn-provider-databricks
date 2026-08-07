# `aiSearchIndex` Submodule <a name="`aiSearchIndex` Submodule" id="@cdktn/provider-databricks.aiSearchIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiSearchIndex <a name="AiSearchIndex" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index databricks_ai_search_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.Initializer"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

new aiSearchIndex.AiSearchIndex(scope: Construct, id: string, config: AiSearchIndexConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig">AiSearchIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig">AiSearchIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.putDeltaSyncIndexSpec">putDeltaSyncIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.putDirectAccessIndexSpec">putDirectAccessIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.resetDeltaSyncIndexSpec">resetDeltaSyncIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.resetDirectAccessIndexSpec">resetDirectAccessIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.resetIndexId">resetIndexId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.resetIndexSubtype">resetIndexSubtype</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeltaSyncIndexSpec` <a name="putDeltaSyncIndexSpec" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.putDeltaSyncIndexSpec"></a>

```typescript
public putDeltaSyncIndexSpec(value: AiSearchIndexDeltaSyncIndexSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.putDeltaSyncIndexSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec">AiSearchIndexDeltaSyncIndexSpec</a>

---

##### `putDirectAccessIndexSpec` <a name="putDirectAccessIndexSpec" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.putDirectAccessIndexSpec"></a>

```typescript
public putDirectAccessIndexSpec(value: AiSearchIndexDirectAccessIndexSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.putDirectAccessIndexSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec">AiSearchIndexDirectAccessIndexSpec</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.putProviderConfig"></a>

```typescript
public putProviderConfig(value: AiSearchIndexProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfig">AiSearchIndexProviderConfig</a>

---

##### `resetDeltaSyncIndexSpec` <a name="resetDeltaSyncIndexSpec" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.resetDeltaSyncIndexSpec"></a>

```typescript
public resetDeltaSyncIndexSpec(): void
```

##### `resetDirectAccessIndexSpec` <a name="resetDirectAccessIndexSpec" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.resetDirectAccessIndexSpec"></a>

```typescript
public resetDirectAccessIndexSpec(): void
```

##### `resetIndexId` <a name="resetIndexId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.resetIndexId"></a>

```typescript
public resetIndexId(): void
```

##### `resetIndexSubtype` <a name="resetIndexSubtype" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.resetIndexSubtype"></a>

```typescript
public resetIndexSubtype(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AiSearchIndex resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.isConstruct"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

aiSearchIndex.AiSearchIndex.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.isTerraformElement"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

aiSearchIndex.AiSearchIndex.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.isTerraformResource"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

aiSearchIndex.AiSearchIndex.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.generateConfigForImport"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

aiSearchIndex.AiSearchIndex.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AiSearchIndex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AiSearchIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AiSearchIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AiSearchIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.deltaSyncIndexSpec">deltaSyncIndexSpec</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference">AiSearchIndexDeltaSyncIndexSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.directAccessIndexSpec">directAccessIndexSpec</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference">AiSearchIndexDirectAccessIndexSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference">AiSearchIndexProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.status">status</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference">AiSearchIndexStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.deltaSyncIndexSpecInput">deltaSyncIndexSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec">AiSearchIndexDeltaSyncIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.directAccessIndexSpecInput">directAccessIndexSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec">AiSearchIndexDirectAccessIndexSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.indexIdInput">indexIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.indexSubtypeInput">indexSubtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.indexTypeInput">indexTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.primaryKeyInput">primaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfig">AiSearchIndexProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.indexId">indexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.indexSubtype">indexSubtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.indexType">indexType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.primaryKey">primaryKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `deltaSyncIndexSpec`<sup>Required</sup> <a name="deltaSyncIndexSpec" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.deltaSyncIndexSpec"></a>

```typescript
public readonly deltaSyncIndexSpec: AiSearchIndexDeltaSyncIndexSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference">AiSearchIndexDeltaSyncIndexSpecOutputReference</a>

---

##### `directAccessIndexSpec`<sup>Required</sup> <a name="directAccessIndexSpec" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.directAccessIndexSpec"></a>

```typescript
public readonly directAccessIndexSpec: AiSearchIndexDirectAccessIndexSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference">AiSearchIndexDirectAccessIndexSpecOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.providerConfig"></a>

```typescript
public readonly providerConfig: AiSearchIndexProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference">AiSearchIndexProviderConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.status"></a>

```typescript
public readonly status: AiSearchIndexStatusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference">AiSearchIndexStatusOutputReference</a>

---

##### `deltaSyncIndexSpecInput`<sup>Optional</sup> <a name="deltaSyncIndexSpecInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.deltaSyncIndexSpecInput"></a>

```typescript
public readonly deltaSyncIndexSpecInput: IResolvable | AiSearchIndexDeltaSyncIndexSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec">AiSearchIndexDeltaSyncIndexSpec</a>

---

##### `directAccessIndexSpecInput`<sup>Optional</sup> <a name="directAccessIndexSpecInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.directAccessIndexSpecInput"></a>

```typescript
public readonly directAccessIndexSpecInput: IResolvable | AiSearchIndexDirectAccessIndexSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec">AiSearchIndexDirectAccessIndexSpec</a>

---

##### `indexIdInput`<sup>Optional</sup> <a name="indexIdInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.indexIdInput"></a>

```typescript
public readonly indexIdInput: string;
```

- *Type:* string

---

##### `indexSubtypeInput`<sup>Optional</sup> <a name="indexSubtypeInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.indexSubtypeInput"></a>

```typescript
public readonly indexSubtypeInput: string;
```

- *Type:* string

---

##### `indexTypeInput`<sup>Optional</sup> <a name="indexTypeInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.indexTypeInput"></a>

```typescript
public readonly indexTypeInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `primaryKeyInput`<sup>Optional</sup> <a name="primaryKeyInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.primaryKeyInput"></a>

```typescript
public readonly primaryKeyInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | AiSearchIndexProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfig">AiSearchIndexProviderConfig</a>

---

##### `indexId`<sup>Required</sup> <a name="indexId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

---

##### `indexSubtype`<sup>Required</sup> <a name="indexSubtype" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.indexSubtype"></a>

```typescript
public readonly indexSubtype: string;
```

- *Type:* string

---

##### `indexType`<sup>Required</sup> <a name="indexType" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.indexType"></a>

```typescript
public readonly indexType: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndex.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AiSearchIndexConfig <a name="AiSearchIndexConfig" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.Initializer"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

const aiSearchIndexConfig: aiSearchIndex.AiSearchIndexConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.indexType">indexType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#index_type AiSearchIndex#index_type}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#parent AiSearchIndex#parent}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.primaryKey">primaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#primary_key AiSearchIndex#primary_key}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.deltaSyncIndexSpec">deltaSyncIndexSpec</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec">AiSearchIndexDeltaSyncIndexSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#delta_sync_index_spec AiSearchIndex#delta_sync_index_spec}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.directAccessIndexSpec">directAccessIndexSpec</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec">AiSearchIndexDirectAccessIndexSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#direct_access_index_spec AiSearchIndex#direct_access_index_spec}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.indexId">indexId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#index_id AiSearchIndex#index_id}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.indexSubtype">indexSubtype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#index_subtype AiSearchIndex#index_subtype}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfig">AiSearchIndexProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#provider_config AiSearchIndex#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `indexType`<sup>Required</sup> <a name="indexType" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.indexType"></a>

```typescript
public readonly indexType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#index_type AiSearchIndex#index_type}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#parent AiSearchIndex#parent}.

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#primary_key AiSearchIndex#primary_key}.

---

##### `deltaSyncIndexSpec`<sup>Optional</sup> <a name="deltaSyncIndexSpec" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.deltaSyncIndexSpec"></a>

```typescript
public readonly deltaSyncIndexSpec: AiSearchIndexDeltaSyncIndexSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec">AiSearchIndexDeltaSyncIndexSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#delta_sync_index_spec AiSearchIndex#delta_sync_index_spec}.

---

##### `directAccessIndexSpec`<sup>Optional</sup> <a name="directAccessIndexSpec" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.directAccessIndexSpec"></a>

```typescript
public readonly directAccessIndexSpec: AiSearchIndexDirectAccessIndexSpec;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec">AiSearchIndexDirectAccessIndexSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#direct_access_index_spec AiSearchIndex#direct_access_index_spec}.

---

##### `indexId`<sup>Optional</sup> <a name="indexId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.indexId"></a>

```typescript
public readonly indexId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#index_id AiSearchIndex#index_id}.

---

##### `indexSubtype`<sup>Optional</sup> <a name="indexSubtype" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.indexSubtype"></a>

```typescript
public readonly indexSubtype: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#index_subtype AiSearchIndex#index_subtype}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: AiSearchIndexProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfig">AiSearchIndexProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#provider_config AiSearchIndex#provider_config}.

---

### AiSearchIndexDeltaSyncIndexSpec <a name="AiSearchIndexDeltaSyncIndexSpec" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.Initializer"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

const aiSearchIndexDeltaSyncIndexSpec: aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.property.pipelineType">pipelineType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#pipeline_type AiSearchIndex#pipeline_type}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.property.columnsToSync">columnsToSync</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#columns_to_sync AiSearchIndex#columns_to_sync}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.property.embeddingSourceColumns">embeddingSourceColumns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#embedding_source_columns AiSearchIndex#embedding_source_columns}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.property.embeddingVectorColumns">embeddingVectorColumns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#embedding_vector_columns AiSearchIndex#embedding_vector_columns}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.property.embeddingWritebackTable">embeddingWritebackTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#embedding_writeback_table AiSearchIndex#embedding_writeback_table}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.property.sourceTable">sourceTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#source_table AiSearchIndex#source_table}. |

---

##### `pipelineType`<sup>Required</sup> <a name="pipelineType" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.property.pipelineType"></a>

```typescript
public readonly pipelineType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#pipeline_type AiSearchIndex#pipeline_type}.

---

##### `columnsToSync`<sup>Optional</sup> <a name="columnsToSync" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.property.columnsToSync"></a>

```typescript
public readonly columnsToSync: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#columns_to_sync AiSearchIndex#columns_to_sync}.

---

##### `embeddingSourceColumns`<sup>Optional</sup> <a name="embeddingSourceColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.property.embeddingSourceColumns"></a>

```typescript
public readonly embeddingSourceColumns: IResolvable | AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#embedding_source_columns AiSearchIndex#embedding_source_columns}.

---

##### `embeddingVectorColumns`<sup>Optional</sup> <a name="embeddingVectorColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.property.embeddingVectorColumns"></a>

```typescript
public readonly embeddingVectorColumns: IResolvable | AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#embedding_vector_columns AiSearchIndex#embedding_vector_columns}.

---

##### `embeddingWritebackTable`<sup>Optional</sup> <a name="embeddingWritebackTable" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.property.embeddingWritebackTable"></a>

```typescript
public readonly embeddingWritebackTable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#embedding_writeback_table AiSearchIndex#embedding_writeback_table}.

---

##### `sourceTable`<sup>Optional</sup> <a name="sourceTable" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec.property.sourceTable"></a>

```typescript
public readonly sourceTable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#source_table AiSearchIndex#source_table}.

---

### AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns <a name="AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.Initializer"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

const aiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns: aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint">embeddingModelEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#embedding_model_endpoint AiSearchIndex#embedding_model_endpoint}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery">modelEndpointNameForQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#model_endpoint_name_for_query AiSearchIndex#model_endpoint_name_for_query}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#name AiSearchIndex#name}. |

---

##### `embeddingModelEndpoint`<sup>Optional</sup> <a name="embeddingModelEndpoint" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint"></a>

```typescript
public readonly embeddingModelEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#embedding_model_endpoint AiSearchIndex#embedding_model_endpoint}.

---

##### `modelEndpointNameForQuery`<sup>Optional</sup> <a name="modelEndpointNameForQuery" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery"></a>

```typescript
public readonly modelEndpointNameForQuery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#model_endpoint_name_for_query AiSearchIndex#model_endpoint_name_for_query}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#name AiSearchIndex#name}.

---

### AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns <a name="AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.Initializer"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

const aiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns: aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.embeddingDimension">embeddingDimension</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#embedding_dimension AiSearchIndex#embedding_dimension}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#name AiSearchIndex#name}. |

---

##### `embeddingDimension`<sup>Optional</sup> <a name="embeddingDimension" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.embeddingDimension"></a>

```typescript
public readonly embeddingDimension: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#embedding_dimension AiSearchIndex#embedding_dimension}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#name AiSearchIndex#name}.

---

### AiSearchIndexDirectAccessIndexSpec <a name="AiSearchIndexDirectAccessIndexSpec" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec.Initializer"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

const aiSearchIndexDirectAccessIndexSpec: aiSearchIndex.AiSearchIndexDirectAccessIndexSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec.property.embeddingSourceColumns">embeddingSourceColumns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#embedding_source_columns AiSearchIndex#embedding_source_columns}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec.property.embeddingVectorColumns">embeddingVectorColumns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#embedding_vector_columns AiSearchIndex#embedding_vector_columns}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec.property.schemaJson">schemaJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#schema_json AiSearchIndex#schema_json}. |

---

##### `embeddingSourceColumns`<sup>Optional</sup> <a name="embeddingSourceColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec.property.embeddingSourceColumns"></a>

```typescript
public readonly embeddingSourceColumns: IResolvable | AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#embedding_source_columns AiSearchIndex#embedding_source_columns}.

---

##### `embeddingVectorColumns`<sup>Optional</sup> <a name="embeddingVectorColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec.property.embeddingVectorColumns"></a>

```typescript
public readonly embeddingVectorColumns: IResolvable | AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#embedding_vector_columns AiSearchIndex#embedding_vector_columns}.

---

##### `schemaJson`<sup>Optional</sup> <a name="schemaJson" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec.property.schemaJson"></a>

```typescript
public readonly schemaJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#schema_json AiSearchIndex#schema_json}.

---

### AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns <a name="AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.Initializer"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

const aiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns: aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint">embeddingModelEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#embedding_model_endpoint AiSearchIndex#embedding_model_endpoint}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery">modelEndpointNameForQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#model_endpoint_name_for_query AiSearchIndex#model_endpoint_name_for_query}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#name AiSearchIndex#name}. |

---

##### `embeddingModelEndpoint`<sup>Optional</sup> <a name="embeddingModelEndpoint" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint"></a>

```typescript
public readonly embeddingModelEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#embedding_model_endpoint AiSearchIndex#embedding_model_endpoint}.

---

##### `modelEndpointNameForQuery`<sup>Optional</sup> <a name="modelEndpointNameForQuery" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery"></a>

```typescript
public readonly modelEndpointNameForQuery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#model_endpoint_name_for_query AiSearchIndex#model_endpoint_name_for_query}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#name AiSearchIndex#name}.

---

### AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns <a name="AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.Initializer"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

const aiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns: aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.embeddingDimension">embeddingDimension</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#embedding_dimension AiSearchIndex#embedding_dimension}. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#name AiSearchIndex#name}. |

---

##### `embeddingDimension`<sup>Optional</sup> <a name="embeddingDimension" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.embeddingDimension"></a>

```typescript
public readonly embeddingDimension: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#embedding_dimension AiSearchIndex#embedding_dimension}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#name AiSearchIndex#name}.

---

### AiSearchIndexProviderConfig <a name="AiSearchIndexProviderConfig" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfig.Initializer"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

const aiSearchIndexProviderConfig: aiSearchIndex.AiSearchIndexProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#workspace_id AiSearchIndex#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_search_index#workspace_id AiSearchIndex#workspace_id}.

---

### AiSearchIndexStatus <a name="AiSearchIndexStatus" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatus.Initializer"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

const aiSearchIndexStatus: aiSearchIndex.AiSearchIndexStatus = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList <a name="AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

new aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get"></a>

```typescript
public get(index: number): AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

---


### AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference <a name="AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

new aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint">resetEmbeddingModelEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery">resetModelEndpointNameForQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmbeddingModelEndpoint` <a name="resetEmbeddingModelEndpoint" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint"></a>

```typescript
public resetEmbeddingModelEndpoint(): void
```

##### `resetModelEndpointNameForQuery` <a name="resetModelEndpointNameForQuery" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery"></a>

```typescript
public resetModelEndpointNameForQuery(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput">embeddingModelEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput">modelEndpointNameForQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint">embeddingModelEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery">modelEndpointNameForQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `embeddingModelEndpointInput`<sup>Optional</sup> <a name="embeddingModelEndpointInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput"></a>

```typescript
public readonly embeddingModelEndpointInput: string;
```

- *Type:* string

---

##### `modelEndpointNameForQueryInput`<sup>Optional</sup> <a name="modelEndpointNameForQueryInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput"></a>

```typescript
public readonly modelEndpointNameForQueryInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `embeddingModelEndpoint`<sup>Required</sup> <a name="embeddingModelEndpoint" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint"></a>

```typescript
public readonly embeddingModelEndpoint: string;
```

- *Type:* string

---

##### `modelEndpointNameForQuery`<sup>Required</sup> <a name="modelEndpointNameForQuery" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery"></a>

```typescript
public readonly modelEndpointNameForQuery: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>

---


### AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList <a name="AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

new aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get"></a>

```typescript
public get(index: number): AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

---


### AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference <a name="AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

new aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension">resetEmbeddingDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmbeddingDimension` <a name="resetEmbeddingDimension" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension"></a>

```typescript
public resetEmbeddingDimension(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput">embeddingDimensionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension">embeddingDimension</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `embeddingDimensionInput`<sup>Optional</sup> <a name="embeddingDimensionInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput"></a>

```typescript
public readonly embeddingDimensionInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `embeddingDimension`<sup>Required</sup> <a name="embeddingDimension" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension"></a>

```typescript
public readonly embeddingDimension: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>

---


### AiSearchIndexDeltaSyncIndexSpecOutputReference <a name="AiSearchIndexDeltaSyncIndexSpecOutputReference" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

new aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns">putEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns">putEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resetColumnsToSync">resetColumnsToSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingSourceColumns">resetEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingVectorColumns">resetEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingWritebackTable">resetEmbeddingWritebackTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resetSourceTable">resetSourceTable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEmbeddingSourceColumns` <a name="putEmbeddingSourceColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns"></a>

```typescript
public putEmbeddingSourceColumns(value: IResolvable | AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

---

##### `putEmbeddingVectorColumns` <a name="putEmbeddingVectorColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns"></a>

```typescript
public putEmbeddingVectorColumns(value: IResolvable | AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

---

##### `resetColumnsToSync` <a name="resetColumnsToSync" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resetColumnsToSync"></a>

```typescript
public resetColumnsToSync(): void
```

##### `resetEmbeddingSourceColumns` <a name="resetEmbeddingSourceColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingSourceColumns"></a>

```typescript
public resetEmbeddingSourceColumns(): void
```

##### `resetEmbeddingVectorColumns` <a name="resetEmbeddingVectorColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingVectorColumns"></a>

```typescript
public resetEmbeddingVectorColumns(): void
```

##### `resetEmbeddingWritebackTable` <a name="resetEmbeddingWritebackTable" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingWritebackTable"></a>

```typescript
public resetEmbeddingWritebackTable(): void
```

##### `resetSourceTable` <a name="resetSourceTable" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.resetSourceTable"></a>

```typescript
public resetSourceTable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumns">embeddingSourceColumns</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList">AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumns">embeddingVectorColumns</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList">AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineId">pipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.columnsToSyncInput">columnsToSyncInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumnsInput">embeddingSourceColumnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumnsInput">embeddingVectorColumnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTableInput">embeddingWritebackTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineTypeInput">pipelineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTableInput">sourceTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.columnsToSync">columnsToSync</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTable">embeddingWritebackTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineType">pipelineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTable">sourceTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec">AiSearchIndexDeltaSyncIndexSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `embeddingSourceColumns`<sup>Required</sup> <a name="embeddingSourceColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumns"></a>

```typescript
public readonly embeddingSourceColumns: AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList">AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList</a>

---

##### `embeddingVectorColumns`<sup>Required</sup> <a name="embeddingVectorColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumns"></a>

```typescript
public readonly embeddingVectorColumns: AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList">AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList</a>

---

##### `pipelineId`<sup>Required</sup> <a name="pipelineId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineId"></a>

```typescript
public readonly pipelineId: string;
```

- *Type:* string

---

##### `columnsToSyncInput`<sup>Optional</sup> <a name="columnsToSyncInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.columnsToSyncInput"></a>

```typescript
public readonly columnsToSyncInput: string[];
```

- *Type:* string[]

---

##### `embeddingSourceColumnsInput`<sup>Optional</sup> <a name="embeddingSourceColumnsInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumnsInput"></a>

```typescript
public readonly embeddingSourceColumnsInput: IResolvable | AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

---

##### `embeddingVectorColumnsInput`<sup>Optional</sup> <a name="embeddingVectorColumnsInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumnsInput"></a>

```typescript
public readonly embeddingVectorColumnsInput: IResolvable | AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">AiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

---

##### `embeddingWritebackTableInput`<sup>Optional</sup> <a name="embeddingWritebackTableInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTableInput"></a>

```typescript
public readonly embeddingWritebackTableInput: string;
```

- *Type:* string

---

##### `pipelineTypeInput`<sup>Optional</sup> <a name="pipelineTypeInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineTypeInput"></a>

```typescript
public readonly pipelineTypeInput: string;
```

- *Type:* string

---

##### `sourceTableInput`<sup>Optional</sup> <a name="sourceTableInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTableInput"></a>

```typescript
public readonly sourceTableInput: string;
```

- *Type:* string

---

##### `columnsToSync`<sup>Required</sup> <a name="columnsToSync" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.columnsToSync"></a>

```typescript
public readonly columnsToSync: string[];
```

- *Type:* string[]

---

##### `embeddingWritebackTable`<sup>Required</sup> <a name="embeddingWritebackTable" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTable"></a>

```typescript
public readonly embeddingWritebackTable: string;
```

- *Type:* string

---

##### `pipelineType`<sup>Required</sup> <a name="pipelineType" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineType"></a>

```typescript
public readonly pipelineType: string;
```

- *Type:* string

---

##### `sourceTable`<sup>Required</sup> <a name="sourceTable" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTable"></a>

```typescript
public readonly sourceTable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchIndexDeltaSyncIndexSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDeltaSyncIndexSpec">AiSearchIndexDeltaSyncIndexSpec</a>

---


### AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList <a name="AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

new aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get"></a>

```typescript
public get(index: number): AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

---


### AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference <a name="AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

new aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint">resetEmbeddingModelEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery">resetModelEndpointNameForQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmbeddingModelEndpoint` <a name="resetEmbeddingModelEndpoint" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint"></a>

```typescript
public resetEmbeddingModelEndpoint(): void
```

##### `resetModelEndpointNameForQuery` <a name="resetModelEndpointNameForQuery" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery"></a>

```typescript
public resetModelEndpointNameForQuery(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput">embeddingModelEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput">modelEndpointNameForQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint">embeddingModelEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery">modelEndpointNameForQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `embeddingModelEndpointInput`<sup>Optional</sup> <a name="embeddingModelEndpointInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput"></a>

```typescript
public readonly embeddingModelEndpointInput: string;
```

- *Type:* string

---

##### `modelEndpointNameForQueryInput`<sup>Optional</sup> <a name="modelEndpointNameForQueryInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput"></a>

```typescript
public readonly modelEndpointNameForQueryInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `embeddingModelEndpoint`<sup>Required</sup> <a name="embeddingModelEndpoint" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint"></a>

```typescript
public readonly embeddingModelEndpoint: string;
```

- *Type:* string

---

##### `modelEndpointNameForQuery`<sup>Required</sup> <a name="modelEndpointNameForQuery" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery"></a>

```typescript
public readonly modelEndpointNameForQuery: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>

---


### AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList <a name="AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

new aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get"></a>

```typescript
public get(index: number): AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

---


### AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference <a name="AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

new aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension">resetEmbeddingDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmbeddingDimension` <a name="resetEmbeddingDimension" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension"></a>

```typescript
public resetEmbeddingDimension(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput">embeddingDimensionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension">embeddingDimension</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `embeddingDimensionInput`<sup>Optional</sup> <a name="embeddingDimensionInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput"></a>

```typescript
public readonly embeddingDimensionInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `embeddingDimension`<sup>Required</sup> <a name="embeddingDimension" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension"></a>

```typescript
public readonly embeddingDimension: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>

---


### AiSearchIndexDirectAccessIndexSpecOutputReference <a name="AiSearchIndexDirectAccessIndexSpecOutputReference" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.Initializer"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

new aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns">putEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns">putEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingSourceColumns">resetEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingVectorColumns">resetEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.resetSchemaJson">resetSchemaJson</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEmbeddingSourceColumns` <a name="putEmbeddingSourceColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns"></a>

```typescript
public putEmbeddingSourceColumns(value: IResolvable | AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

---

##### `putEmbeddingVectorColumns` <a name="putEmbeddingVectorColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns"></a>

```typescript
public putEmbeddingVectorColumns(value: IResolvable | AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

---

##### `resetEmbeddingSourceColumns` <a name="resetEmbeddingSourceColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingSourceColumns"></a>

```typescript
public resetEmbeddingSourceColumns(): void
```

##### `resetEmbeddingVectorColumns` <a name="resetEmbeddingVectorColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingVectorColumns"></a>

```typescript
public resetEmbeddingVectorColumns(): void
```

##### `resetSchemaJson` <a name="resetSchemaJson" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.resetSchemaJson"></a>

```typescript
public resetSchemaJson(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumns">embeddingSourceColumns</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList">AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumns">embeddingVectorColumns</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList">AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumnsInput">embeddingSourceColumnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumnsInput">embeddingVectorColumnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJsonInput">schemaJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJson">schemaJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec">AiSearchIndexDirectAccessIndexSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `embeddingSourceColumns`<sup>Required</sup> <a name="embeddingSourceColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumns"></a>

```typescript
public readonly embeddingSourceColumns: AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList">AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList</a>

---

##### `embeddingVectorColumns`<sup>Required</sup> <a name="embeddingVectorColumns" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumns"></a>

```typescript
public readonly embeddingVectorColumns: AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList">AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList</a>

---

##### `embeddingSourceColumnsInput`<sup>Optional</sup> <a name="embeddingSourceColumnsInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumnsInput"></a>

```typescript
public readonly embeddingSourceColumnsInput: IResolvable | AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

---

##### `embeddingVectorColumnsInput`<sup>Optional</sup> <a name="embeddingVectorColumnsInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumnsInput"></a>

```typescript
public readonly embeddingVectorColumnsInput: IResolvable | AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">AiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

---

##### `schemaJsonInput`<sup>Optional</sup> <a name="schemaJsonInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJsonInput"></a>

```typescript
public readonly schemaJsonInput: string;
```

- *Type:* string

---

##### `schemaJson`<sup>Required</sup> <a name="schemaJson" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJson"></a>

```typescript
public readonly schemaJson: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchIndexDirectAccessIndexSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexDirectAccessIndexSpec">AiSearchIndexDirectAccessIndexSpec</a>

---


### AiSearchIndexProviderConfigOutputReference <a name="AiSearchIndexProviderConfigOutputReference" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.Initializer"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

new aiSearchIndex.AiSearchIndexProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfig">AiSearchIndexProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiSearchIndexProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexProviderConfig">AiSearchIndexProviderConfig</a>

---


### AiSearchIndexStatusOutputReference <a name="AiSearchIndexStatusOutputReference" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.Initializer"></a>

```typescript
import { aiSearchIndex } from '@cdktn/provider-databricks'

new aiSearchIndex.AiSearchIndexStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.indexedRowCount">indexedRowCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.indexUrl">indexUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.ready">ready</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatus">AiSearchIndexStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `indexedRowCount`<sup>Required</sup> <a name="indexedRowCount" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.indexedRowCount"></a>

```typescript
public readonly indexedRowCount: number;
```

- *Type:* number

---

##### `indexUrl`<sup>Required</sup> <a name="indexUrl" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.indexUrl"></a>

```typescript
public readonly indexUrl: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `ready`<sup>Required</sup> <a name="ready" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.ready"></a>

```typescript
public readonly ready: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AiSearchIndexStatus;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiSearchIndex.AiSearchIndexStatus">AiSearchIndexStatus</a>

---



