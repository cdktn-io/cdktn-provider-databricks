# `assumeGroupRestrictedSharingGroup` Submodule <a name="`assumeGroupRestrictedSharingGroup` Submodule" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AssumeGroupRestrictedSharingGroup <a name="AssumeGroupRestrictedSharingGroup" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/assume_group_restricted_sharing_group databricks_assume_group_restricted_sharing_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer"></a>

```typescript
import { assumeGroupRestrictedSharingGroup } from '@cdktn/provider-databricks'

new assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup(scope: Construct, id: string, config: AssumeGroupRestrictedSharingGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig">AssumeGroupRestrictedSharingGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig">AssumeGroupRestrictedSharingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.putProviderConfig"></a>

```typescript
public putProviderConfig(value: AssumeGroupRestrictedSharingGroupProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig">AssumeGroupRestrictedSharingGroupProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AssumeGroupRestrictedSharingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isConstruct"></a>

```typescript
import { assumeGroupRestrictedSharingGroup } from '@cdktn/provider-databricks'

assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isTerraformElement"></a>

```typescript
import { assumeGroupRestrictedSharingGroup } from '@cdktn/provider-databricks'

assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isTerraformResource"></a>

```typescript
import { assumeGroupRestrictedSharingGroup } from '@cdktn/provider-databricks'

assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.generateConfigForImport"></a>

```typescript
import { assumeGroupRestrictedSharingGroup } from '@cdktn/provider-databricks'

assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AssumeGroupRestrictedSharingGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AssumeGroupRestrictedSharingGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AssumeGroupRestrictedSharingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/assume_group_restricted_sharing_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AssumeGroupRestrictedSharingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.groupDisplayName">groupDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference">AssumeGroupRestrictedSharingGroupProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig">AssumeGroupRestrictedSharingGroupProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.restrictedSharingGroupIdInput">restrictedSharingGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.restrictedSharingGroupId">restrictedSharingGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `groupDisplayName`<sup>Required</sup> <a name="groupDisplayName" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.groupDisplayName"></a>

```typescript
public readonly groupDisplayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.providerConfig"></a>

```typescript
public readonly providerConfig: AssumeGroupRestrictedSharingGroupProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference">AssumeGroupRestrictedSharingGroupProviderConfigOutputReference</a>

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | AssumeGroupRestrictedSharingGroupProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig">AssumeGroupRestrictedSharingGroupProviderConfig</a>

---

##### `restrictedSharingGroupIdInput`<sup>Optional</sup> <a name="restrictedSharingGroupIdInput" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.restrictedSharingGroupIdInput"></a>

```typescript
public readonly restrictedSharingGroupIdInput: string;
```

- *Type:* string

---

##### `restrictedSharingGroupId`<sup>Required</sup> <a name="restrictedSharingGroupId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.restrictedSharingGroupId"></a>

```typescript
public readonly restrictedSharingGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AssumeGroupRestrictedSharingGroupConfig <a name="AssumeGroupRestrictedSharingGroupConfig" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.Initializer"></a>

```typescript
import { assumeGroupRestrictedSharingGroup } from '@cdktn/provider-databricks'

const assumeGroupRestrictedSharingGroupConfig: assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.restrictedSharingGroupId">restrictedSharingGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/assume_group_restricted_sharing_group#restricted_sharing_group_id AssumeGroupRestrictedSharingGroup#restricted_sharing_group_id}. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig">AssumeGroupRestrictedSharingGroupProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/assume_group_restricted_sharing_group#provider_config AssumeGroupRestrictedSharingGroup#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `restrictedSharingGroupId`<sup>Required</sup> <a name="restrictedSharingGroupId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.restrictedSharingGroupId"></a>

```typescript
public readonly restrictedSharingGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/assume_group_restricted_sharing_group#restricted_sharing_group_id AssumeGroupRestrictedSharingGroup#restricted_sharing_group_id}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: AssumeGroupRestrictedSharingGroupProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig">AssumeGroupRestrictedSharingGroupProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/assume_group_restricted_sharing_group#provider_config AssumeGroupRestrictedSharingGroup#provider_config}.

---

### AssumeGroupRestrictedSharingGroupProviderConfig <a name="AssumeGroupRestrictedSharingGroupProviderConfig" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig.Initializer"></a>

```typescript
import { assumeGroupRestrictedSharingGroup } from '@cdktn/provider-databricks'

const assumeGroupRestrictedSharingGroupProviderConfig: assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/assume_group_restricted_sharing_group#workspace_id AssumeGroupRestrictedSharingGroup#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.143.0/docs/resources/assume_group_restricted_sharing_group#workspace_id AssumeGroupRestrictedSharingGroup#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AssumeGroupRestrictedSharingGroupProviderConfigOutputReference <a name="AssumeGroupRestrictedSharingGroupProviderConfigOutputReference" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer"></a>

```typescript
import { assumeGroupRestrictedSharingGroup } from '@cdktn/provider-databricks'

new assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig">AssumeGroupRestrictedSharingGroupProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AssumeGroupRestrictedSharingGroupProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.assumeGroupRestrictedSharingGroup.AssumeGroupRestrictedSharingGroupProviderConfig">AssumeGroupRestrictedSharingGroupProviderConfig</a>

---



