# `azureAdlsGen2Mount` Submodule <a name="`azureAdlsGen2Mount` Submodule" id="@cdktn/provider-databricks.azureAdlsGen2Mount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureAdlsGen2Mount <a name="AzureAdlsGen2Mount" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount databricks_azure_adls_gen2_mount}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer"></a>

```typescript
import { azureAdlsGen2Mount } from '@cdktn/provider-databricks'

new azureAdlsGen2Mount.AzureAdlsGen2Mount(scope: Construct, id: string, config: AzureAdlsGen2MountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig">AzureAdlsGen2MountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig">AzureAdlsGen2MountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetDirectory">resetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetClusterId` <a name="resetClusterId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetClusterId"></a>

```typescript
public resetClusterId(): void
```

##### `resetDirectory` <a name="resetDirectory" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetDirectory"></a>

```typescript
public resetDirectory(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AzureAdlsGen2Mount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isConstruct"></a>

```typescript
import { azureAdlsGen2Mount } from '@cdktn/provider-databricks'

azureAdlsGen2Mount.AzureAdlsGen2Mount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformElement"></a>

```typescript
import { azureAdlsGen2Mount } from '@cdktn/provider-databricks'

azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformResource"></a>

```typescript
import { azureAdlsGen2Mount } from '@cdktn/provider-databricks'

azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.generateConfigForImport"></a>

```typescript
import { azureAdlsGen2Mount } from '@cdktn/provider-databricks'

azureAdlsGen2Mount.AzureAdlsGen2Mount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AzureAdlsGen2Mount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AzureAdlsGen2Mount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AzureAdlsGen2Mount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AzureAdlsGen2Mount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretKeyInput">clientSecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretScopeInput">clientSecretScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.directoryInput">directoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.initializeFileSystemInput">initializeFileSystemInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.mountNameInput">mountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.storageAccountNameInput">storageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretKey">clientSecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretScope">clientSecretScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.directory">directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.initializeFileSystem">initializeFileSystem</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.mountName">mountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretKeyInput`<sup>Optional</sup> <a name="clientSecretKeyInput" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretKeyInput"></a>

```typescript
public readonly clientSecretKeyInput: string;
```

- *Type:* string

---

##### `clientSecretScopeInput`<sup>Optional</sup> <a name="clientSecretScopeInput" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretScopeInput"></a>

```typescript
public readonly clientSecretScopeInput: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `directoryInput`<sup>Optional</sup> <a name="directoryInput" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.directoryInput"></a>

```typescript
public readonly directoryInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initializeFileSystemInput`<sup>Optional</sup> <a name="initializeFileSystemInput" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.initializeFileSystemInput"></a>

```typescript
public readonly initializeFileSystemInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `mountNameInput`<sup>Optional</sup> <a name="mountNameInput" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.mountNameInput"></a>

```typescript
public readonly mountNameInput: string;
```

- *Type:* string

---

##### `storageAccountNameInput`<sup>Optional</sup> <a name="storageAccountNameInput" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.storageAccountNameInput"></a>

```typescript
public readonly storageAccountNameInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecretKey`<sup>Required</sup> <a name="clientSecretKey" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretKey"></a>

```typescript
public readonly clientSecretKey: string;
```

- *Type:* string

---

##### `clientSecretScope`<sup>Required</sup> <a name="clientSecretScope" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clientSecretScope"></a>

```typescript
public readonly clientSecretScope: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `directory`<sup>Required</sup> <a name="directory" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initializeFileSystem`<sup>Required</sup> <a name="initializeFileSystem" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.initializeFileSystem"></a>

```typescript
public readonly initializeFileSystem: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `mountName`<sup>Required</sup> <a name="mountName" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.mountName"></a>

```typescript
public readonly mountName: string;
```

- *Type:* string

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2Mount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AzureAdlsGen2MountConfig <a name="AzureAdlsGen2MountConfig" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.Initializer"></a>

```typescript
import { azureAdlsGen2Mount } from '@cdktn/provider-databricks'

const azureAdlsGen2MountConfig: azureAdlsGen2Mount.AzureAdlsGen2MountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#client_id AzureAdlsGen2Mount#client_id}. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clientSecretKey">clientSecretKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#client_secret_key AzureAdlsGen2Mount#client_secret_key}. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clientSecretScope">clientSecretScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#client_secret_scope AzureAdlsGen2Mount#client_secret_scope}. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.containerName">containerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#container_name AzureAdlsGen2Mount#container_name}. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.initializeFileSystem">initializeFileSystem</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#initialize_file_system AzureAdlsGen2Mount#initialize_file_system}. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.mountName">mountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#mount_name AzureAdlsGen2Mount#mount_name}. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.storageAccountName">storageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#storage_account_name AzureAdlsGen2Mount#storage_account_name}. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#tenant_id AzureAdlsGen2Mount#tenant_id}. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#cluster_id AzureAdlsGen2Mount#cluster_id}. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.directory">directory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#directory AzureAdlsGen2Mount#directory}. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.environment">environment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#environment AzureAdlsGen2Mount#environment}. |
| <code><a href="#@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#id AzureAdlsGen2Mount#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#client_id AzureAdlsGen2Mount#client_id}.

---

##### `clientSecretKey`<sup>Required</sup> <a name="clientSecretKey" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clientSecretKey"></a>

```typescript
public readonly clientSecretKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#client_secret_key AzureAdlsGen2Mount#client_secret_key}.

---

##### `clientSecretScope`<sup>Required</sup> <a name="clientSecretScope" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clientSecretScope"></a>

```typescript
public readonly clientSecretScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#client_secret_scope AzureAdlsGen2Mount#client_secret_scope}.

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#container_name AzureAdlsGen2Mount#container_name}.

---

##### `initializeFileSystem`<sup>Required</sup> <a name="initializeFileSystem" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.initializeFileSystem"></a>

```typescript
public readonly initializeFileSystem: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#initialize_file_system AzureAdlsGen2Mount#initialize_file_system}.

---

##### `mountName`<sup>Required</sup> <a name="mountName" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.mountName"></a>

```typescript
public readonly mountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#mount_name AzureAdlsGen2Mount#mount_name}.

---

##### `storageAccountName`<sup>Required</sup> <a name="storageAccountName" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.storageAccountName"></a>

```typescript
public readonly storageAccountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#storage_account_name AzureAdlsGen2Mount#storage_account_name}.

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#tenant_id AzureAdlsGen2Mount#tenant_id}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#cluster_id AzureAdlsGen2Mount#cluster_id}.

---

##### `directory`<sup>Optional</sup> <a name="directory" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.directory"></a>

```typescript
public readonly directory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#directory AzureAdlsGen2Mount#directory}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#environment AzureAdlsGen2Mount#environment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.azureAdlsGen2Mount.AzureAdlsGen2MountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.115.0/docs/resources/azure_adls_gen2_mount#id AzureAdlsGen2Mount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



