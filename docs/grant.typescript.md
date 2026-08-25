# `grant` Submodule <a name="`grant` Submodule" id="@cdktn/provider-databricks.grant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Grant <a name="Grant" id="@cdktn/provider-databricks.grant.Grant"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant databricks_grant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.grant.Grant.Initializer"></a>

```typescript
import { grant } from '@cdktn/provider-databricks'

new grant.Grant(scope: Construct, id: string, config: GrantConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.grant.GrantConfig">GrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.grant.Grant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.grant.Grant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.grant.Grant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.grant.GrantConfig">GrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.resetCredential">resetCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.resetExternalLocation">resetExternalLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.resetForeignConnection">resetForeignConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.resetFunction">resetFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.resetMcpService">resetMcpService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.resetMetastore">resetMetastore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.resetModelProviderService">resetModelProviderService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.resetModelService">resetModelService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.resetPipeline">resetPipeline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.resetRecipient">resetRecipient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.resetShare">resetShare</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.resetStorageCredential">resetStorageCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.resetTable">resetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.resetVolume">resetVolume</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.grant.Grant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.grant.Grant.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.grant.Grant.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.grant.Grant.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.grant.Grant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.grant.Grant.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.grant.Grant.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.grant.Grant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.grant.Grant.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.grant.Grant.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.grant.Grant.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.grant.Grant.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.grant.Grant.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.grant.Grant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.grant.Grant.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grant.Grant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.grant.Grant.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grant.Grant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.grant.Grant.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grant.Grant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.grant.Grant.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grant.Grant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.grant.Grant.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grant.Grant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.grant.Grant.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grant.Grant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.grant.Grant.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grant.Grant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.grant.Grant.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grant.Grant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.grant.Grant.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grant.Grant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.grant.Grant.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.grant.Grant.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.grant.Grant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.grant.Grant.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.grant.Grant.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grant.Grant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.grant.Grant.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.grant.Grant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.grant.Grant.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.grant.Grant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.grant.Grant.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.grant.Grant.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.grant.Grant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.grant.Grant.putProviderConfig"></a>

```typescript
public putProviderConfig(value: GrantProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.grant.Grant.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.grant.GrantProviderConfig">GrantProviderConfig</a>

---

##### `resetCatalog` <a name="resetCatalog" id="@cdktn/provider-databricks.grant.Grant.resetCatalog"></a>

```typescript
public resetCatalog(): void
```

##### `resetCredential` <a name="resetCredential" id="@cdktn/provider-databricks.grant.Grant.resetCredential"></a>

```typescript
public resetCredential(): void
```

##### `resetExternalLocation` <a name="resetExternalLocation" id="@cdktn/provider-databricks.grant.Grant.resetExternalLocation"></a>

```typescript
public resetExternalLocation(): void
```

##### `resetForeignConnection` <a name="resetForeignConnection" id="@cdktn/provider-databricks.grant.Grant.resetForeignConnection"></a>

```typescript
public resetForeignConnection(): void
```

##### `resetFunction` <a name="resetFunction" id="@cdktn/provider-databricks.grant.Grant.resetFunction"></a>

```typescript
public resetFunction(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.grant.Grant.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMcpService` <a name="resetMcpService" id="@cdktn/provider-databricks.grant.Grant.resetMcpService"></a>

```typescript
public resetMcpService(): void
```

##### `resetMetastore` <a name="resetMetastore" id="@cdktn/provider-databricks.grant.Grant.resetMetastore"></a>

```typescript
public resetMetastore(): void
```

##### `resetModel` <a name="resetModel" id="@cdktn/provider-databricks.grant.Grant.resetModel"></a>

```typescript
public resetModel(): void
```

##### `resetModelProviderService` <a name="resetModelProviderService" id="@cdktn/provider-databricks.grant.Grant.resetModelProviderService"></a>

```typescript
public resetModelProviderService(): void
```

##### `resetModelService` <a name="resetModelService" id="@cdktn/provider-databricks.grant.Grant.resetModelService"></a>

```typescript
public resetModelService(): void
```

##### `resetPipeline` <a name="resetPipeline" id="@cdktn/provider-databricks.grant.Grant.resetPipeline"></a>

```typescript
public resetPipeline(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.grant.Grant.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetRecipient` <a name="resetRecipient" id="@cdktn/provider-databricks.grant.Grant.resetRecipient"></a>

```typescript
public resetRecipient(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-databricks.grant.Grant.resetSchema"></a>

```typescript
public resetSchema(): void
```

##### `resetShare` <a name="resetShare" id="@cdktn/provider-databricks.grant.Grant.resetShare"></a>

```typescript
public resetShare(): void
```

##### `resetStorageCredential` <a name="resetStorageCredential" id="@cdktn/provider-databricks.grant.Grant.resetStorageCredential"></a>

```typescript
public resetStorageCredential(): void
```

##### `resetTable` <a name="resetTable" id="@cdktn/provider-databricks.grant.Grant.resetTable"></a>

```typescript
public resetTable(): void
```

##### `resetVolume` <a name="resetVolume" id="@cdktn/provider-databricks.grant.Grant.resetVolume"></a>

```typescript
public resetVolume(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Grant resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.grant.Grant.isConstruct"></a>

```typescript
import { grant } from '@cdktn/provider-databricks'

grant.Grant.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.grant.Grant.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.grant.Grant.isTerraformElement"></a>

```typescript
import { grant } from '@cdktn/provider-databricks'

grant.Grant.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.grant.Grant.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.grant.Grant.isTerraformResource"></a>

```typescript
import { grant } from '@cdktn/provider-databricks'

grant.Grant.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.grant.Grant.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.grant.Grant.generateConfigForImport"></a>

```typescript
import { grant } from '@cdktn/provider-databricks'

grant.Grant.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Grant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.grant.Grant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.grant.Grant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Grant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.grant.Grant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Grant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.grant.Grant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Grant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference">GrantProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.catalogInput">catalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.credentialInput">credentialInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.externalLocationInput">externalLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.foreignConnectionInput">foreignConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.functionInput">functionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.mcpServiceInput">mcpServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.metastoreInput">metastoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.modelProviderServiceInput">modelProviderServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.modelServiceInput">modelServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.pipelineInput">pipelineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.privilegesInput">privilegesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfig">GrantProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.recipientInput">recipientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.shareInput">shareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.storageCredentialInput">storageCredentialInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.tableInput">tableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.volumeInput">volumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.credential">credential</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.externalLocation">externalLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.foreignConnection">foreignConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.function">function</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.mcpService">mcpService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.metastore">metastore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.modelProviderService">modelProviderService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.modelService">modelService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.pipeline">pipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.privileges">privileges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.recipient">recipient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.share">share</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.storageCredential">storageCredential</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.table">table</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.volume">volume</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.grant.Grant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.grant.Grant.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.grant.Grant.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.grant.Grant.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.grant.Grant.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.grant.Grant.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.grant.Grant.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.grant.Grant.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.grant.Grant.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.grant.Grant.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.grant.Grant.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.grant.Grant.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.grant.Grant.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.grant.Grant.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.grant.Grant.property.providerConfig"></a>

```typescript
public readonly providerConfig: GrantProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference">GrantProviderConfigOutputReference</a>

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-databricks.grant.Grant.property.catalogInput"></a>

```typescript
public readonly catalogInput: string;
```

- *Type:* string

---

##### `credentialInput`<sup>Optional</sup> <a name="credentialInput" id="@cdktn/provider-databricks.grant.Grant.property.credentialInput"></a>

```typescript
public readonly credentialInput: string;
```

- *Type:* string

---

##### `externalLocationInput`<sup>Optional</sup> <a name="externalLocationInput" id="@cdktn/provider-databricks.grant.Grant.property.externalLocationInput"></a>

```typescript
public readonly externalLocationInput: string;
```

- *Type:* string

---

##### `foreignConnectionInput`<sup>Optional</sup> <a name="foreignConnectionInput" id="@cdktn/provider-databricks.grant.Grant.property.foreignConnectionInput"></a>

```typescript
public readonly foreignConnectionInput: string;
```

- *Type:* string

---

##### `functionInput`<sup>Optional</sup> <a name="functionInput" id="@cdktn/provider-databricks.grant.Grant.property.functionInput"></a>

```typescript
public readonly functionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.grant.Grant.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mcpServiceInput`<sup>Optional</sup> <a name="mcpServiceInput" id="@cdktn/provider-databricks.grant.Grant.property.mcpServiceInput"></a>

```typescript
public readonly mcpServiceInput: string;
```

- *Type:* string

---

##### `metastoreInput`<sup>Optional</sup> <a name="metastoreInput" id="@cdktn/provider-databricks.grant.Grant.property.metastoreInput"></a>

```typescript
public readonly metastoreInput: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-databricks.grant.Grant.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `modelProviderServiceInput`<sup>Optional</sup> <a name="modelProviderServiceInput" id="@cdktn/provider-databricks.grant.Grant.property.modelProviderServiceInput"></a>

```typescript
public readonly modelProviderServiceInput: string;
```

- *Type:* string

---

##### `modelServiceInput`<sup>Optional</sup> <a name="modelServiceInput" id="@cdktn/provider-databricks.grant.Grant.property.modelServiceInput"></a>

```typescript
public readonly modelServiceInput: string;
```

- *Type:* string

---

##### `pipelineInput`<sup>Optional</sup> <a name="pipelineInput" id="@cdktn/provider-databricks.grant.Grant.property.pipelineInput"></a>

```typescript
public readonly pipelineInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-databricks.grant.Grant.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `privilegesInput`<sup>Optional</sup> <a name="privilegesInput" id="@cdktn/provider-databricks.grant.Grant.property.privilegesInput"></a>

```typescript
public readonly privilegesInput: string[];
```

- *Type:* string[]

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.grant.Grant.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: GrantProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.grant.GrantProviderConfig">GrantProviderConfig</a>

---

##### `recipientInput`<sup>Optional</sup> <a name="recipientInput" id="@cdktn/provider-databricks.grant.Grant.property.recipientInput"></a>

```typescript
public readonly recipientInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-databricks.grant.Grant.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `shareInput`<sup>Optional</sup> <a name="shareInput" id="@cdktn/provider-databricks.grant.Grant.property.shareInput"></a>

```typescript
public readonly shareInput: string;
```

- *Type:* string

---

##### `storageCredentialInput`<sup>Optional</sup> <a name="storageCredentialInput" id="@cdktn/provider-databricks.grant.Grant.property.storageCredentialInput"></a>

```typescript
public readonly storageCredentialInput: string;
```

- *Type:* string

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktn/provider-databricks.grant.Grant.property.tableInput"></a>

```typescript
public readonly tableInput: string;
```

- *Type:* string

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktn/provider-databricks.grant.Grant.property.volumeInput"></a>

```typescript
public readonly volumeInput: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-databricks.grant.Grant.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktn/provider-databricks.grant.Grant.property.credential"></a>

```typescript
public readonly credential: string;
```

- *Type:* string

---

##### `externalLocation`<sup>Required</sup> <a name="externalLocation" id="@cdktn/provider-databricks.grant.Grant.property.externalLocation"></a>

```typescript
public readonly externalLocation: string;
```

- *Type:* string

---

##### `foreignConnection`<sup>Required</sup> <a name="foreignConnection" id="@cdktn/provider-databricks.grant.Grant.property.foreignConnection"></a>

```typescript
public readonly foreignConnection: string;
```

- *Type:* string

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktn/provider-databricks.grant.Grant.property.function"></a>

```typescript
public readonly function: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.grant.Grant.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mcpService`<sup>Required</sup> <a name="mcpService" id="@cdktn/provider-databricks.grant.Grant.property.mcpService"></a>

```typescript
public readonly mcpService: string;
```

- *Type:* string

---

##### `metastore`<sup>Required</sup> <a name="metastore" id="@cdktn/provider-databricks.grant.Grant.property.metastore"></a>

```typescript
public readonly metastore: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-databricks.grant.Grant.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `modelProviderService`<sup>Required</sup> <a name="modelProviderService" id="@cdktn/provider-databricks.grant.Grant.property.modelProviderService"></a>

```typescript
public readonly modelProviderService: string;
```

- *Type:* string

---

##### `modelService`<sup>Required</sup> <a name="modelService" id="@cdktn/provider-databricks.grant.Grant.property.modelService"></a>

```typescript
public readonly modelService: string;
```

- *Type:* string

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktn/provider-databricks.grant.Grant.property.pipeline"></a>

```typescript
public readonly pipeline: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-databricks.grant.Grant.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktn/provider-databricks.grant.Grant.property.privileges"></a>

```typescript
public readonly privileges: string[];
```

- *Type:* string[]

---

##### `recipient`<sup>Required</sup> <a name="recipient" id="@cdktn/provider-databricks.grant.Grant.property.recipient"></a>

```typescript
public readonly recipient: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-databricks.grant.Grant.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `share`<sup>Required</sup> <a name="share" id="@cdktn/provider-databricks.grant.Grant.property.share"></a>

```typescript
public readonly share: string;
```

- *Type:* string

---

##### `storageCredential`<sup>Required</sup> <a name="storageCredential" id="@cdktn/provider-databricks.grant.Grant.property.storageCredential"></a>

```typescript
public readonly storageCredential: string;
```

- *Type:* string

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-databricks.grant.Grant.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktn/provider-databricks.grant.Grant.property.volume"></a>

```typescript
public readonly volume: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.grant.Grant.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.grant.Grant.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GrantConfig <a name="GrantConfig" id="@cdktn/provider-databricks.grant.GrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.grant.GrantConfig.Initializer"></a>

```typescript
import { grant } from '@cdktn/provider-databricks'

const grantConfig: grant.GrantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.principal">principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#principal Grant#principal}. |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.privileges">privileges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#privileges Grant#privileges}. |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.catalog">catalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#catalog Grant#catalog}. |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.credential">credential</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#credential Grant#credential}. |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.externalLocation">externalLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#external_location Grant#external_location}. |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.foreignConnection">foreignConnection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#foreign_connection Grant#foreign_connection}. |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.function">function</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#function Grant#function}. |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#id Grant#id}. |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.mcpService">mcpService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#mcp_service Grant#mcp_service}. |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.metastore">metastore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#metastore Grant#metastore}. |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.model">model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#model Grant#model}. |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.modelProviderService">modelProviderService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#model_provider_service Grant#model_provider_service}. |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.modelService">modelService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#model_service Grant#model_service}. |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.pipeline">pipeline</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#pipeline Grant#pipeline}. |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfig">GrantProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.recipient">recipient</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#recipient Grant#recipient}. |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.schema">schema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#schema Grant#schema}. |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.share">share</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#share Grant#share}. |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.storageCredential">storageCredential</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#storage_credential Grant#storage_credential}. |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.table">table</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#table Grant#table}. |
| <code><a href="#@cdktn/provider-databricks.grant.GrantConfig.property.volume">volume</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#volume Grant#volume}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.grant.GrantConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.grant.GrantConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.grant.GrantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.grant.GrantConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.grant.GrantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.grant.GrantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.grant.GrantConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-databricks.grant.GrantConfig.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#principal Grant#principal}.

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktn/provider-databricks.grant.GrantConfig.property.privileges"></a>

```typescript
public readonly privileges: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#privileges Grant#privileges}.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-databricks.grant.GrantConfig.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#catalog Grant#catalog}.

---

##### `credential`<sup>Optional</sup> <a name="credential" id="@cdktn/provider-databricks.grant.GrantConfig.property.credential"></a>

```typescript
public readonly credential: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#credential Grant#credential}.

---

##### `externalLocation`<sup>Optional</sup> <a name="externalLocation" id="@cdktn/provider-databricks.grant.GrantConfig.property.externalLocation"></a>

```typescript
public readonly externalLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#external_location Grant#external_location}.

---

##### `foreignConnection`<sup>Optional</sup> <a name="foreignConnection" id="@cdktn/provider-databricks.grant.GrantConfig.property.foreignConnection"></a>

```typescript
public readonly foreignConnection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#foreign_connection Grant#foreign_connection}.

---

##### `function`<sup>Optional</sup> <a name="function" id="@cdktn/provider-databricks.grant.GrantConfig.property.function"></a>

```typescript
public readonly function: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#function Grant#function}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.grant.GrantConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#id Grant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mcpService`<sup>Optional</sup> <a name="mcpService" id="@cdktn/provider-databricks.grant.GrantConfig.property.mcpService"></a>

```typescript
public readonly mcpService: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#mcp_service Grant#mcp_service}.

---

##### `metastore`<sup>Optional</sup> <a name="metastore" id="@cdktn/provider-databricks.grant.GrantConfig.property.metastore"></a>

```typescript
public readonly metastore: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#metastore Grant#metastore}.

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-databricks.grant.GrantConfig.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#model Grant#model}.

---

##### `modelProviderService`<sup>Optional</sup> <a name="modelProviderService" id="@cdktn/provider-databricks.grant.GrantConfig.property.modelProviderService"></a>

```typescript
public readonly modelProviderService: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#model_provider_service Grant#model_provider_service}.

---

##### `modelService`<sup>Optional</sup> <a name="modelService" id="@cdktn/provider-databricks.grant.GrantConfig.property.modelService"></a>

```typescript
public readonly modelService: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#model_service Grant#model_service}.

---

##### `pipeline`<sup>Optional</sup> <a name="pipeline" id="@cdktn/provider-databricks.grant.GrantConfig.property.pipeline"></a>

```typescript
public readonly pipeline: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#pipeline Grant#pipeline}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.grant.GrantConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: GrantProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.grant.GrantProviderConfig">GrantProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#provider_config Grant#provider_config}

---

##### `recipient`<sup>Optional</sup> <a name="recipient" id="@cdktn/provider-databricks.grant.GrantConfig.property.recipient"></a>

```typescript
public readonly recipient: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#recipient Grant#recipient}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-databricks.grant.GrantConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#schema Grant#schema}.

---

##### `share`<sup>Optional</sup> <a name="share" id="@cdktn/provider-databricks.grant.GrantConfig.property.share"></a>

```typescript
public readonly share: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#share Grant#share}.

---

##### `storageCredential`<sup>Optional</sup> <a name="storageCredential" id="@cdktn/provider-databricks.grant.GrantConfig.property.storageCredential"></a>

```typescript
public readonly storageCredential: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#storage_credential Grant#storage_credential}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktn/provider-databricks.grant.GrantConfig.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#table Grant#table}.

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktn/provider-databricks.grant.GrantConfig.property.volume"></a>

```typescript
public readonly volume: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#volume Grant#volume}.

---

### GrantProviderConfig <a name="GrantProviderConfig" id="@cdktn/provider-databricks.grant.GrantProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.grant.GrantProviderConfig.Initializer"></a>

```typescript
import { grant } from '@cdktn/provider-databricks'

const grantProviderConfig: grant.GrantProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#workspace_id Grant#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.grant.GrantProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/resources/grant#workspace_id Grant#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrantProviderConfigOutputReference <a name="GrantProviderConfigOutputReference" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.Initializer"></a>

```typescript
import { grant } from '@cdktn/provider-databricks'

new grant.GrantProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.grant.GrantProviderConfig">GrantProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.grant.GrantProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GrantProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.grant.GrantProviderConfig">GrantProviderConfig</a>

---



