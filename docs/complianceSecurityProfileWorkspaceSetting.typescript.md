# `complianceSecurityProfileWorkspaceSetting` Submodule <a name="`complianceSecurityProfileWorkspaceSetting` Submodule" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComplianceSecurityProfileWorkspaceSetting <a name="ComplianceSecurityProfileWorkspaceSetting" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/compliance_security_profile_workspace_setting databricks_compliance_security_profile_workspace_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer"></a>

```typescript
import { complianceSecurityProfileWorkspaceSetting } from '@cdktn/provider-databricks'

new complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting(scope: Construct, id: string, config: ComplianceSecurityProfileWorkspaceSettingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig">ComplianceSecurityProfileWorkspaceSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig">ComplianceSecurityProfileWorkspaceSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.putComplianceSecurityProfileWorkspace">putComplianceSecurityProfileWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetSettingName">resetSettingName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComplianceSecurityProfileWorkspace` <a name="putComplianceSecurityProfileWorkspace" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.putComplianceSecurityProfileWorkspace"></a>

```typescript
public putComplianceSecurityProfileWorkspace(value: ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.putComplianceSecurityProfileWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.putProviderConfig"></a>

```typescript
public putProviderConfig(value: ComplianceSecurityProfileWorkspaceSettingProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfig">ComplianceSecurityProfileWorkspaceSettingProviderConfig</a>

---

##### `resetEtag` <a name="resetEtag" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetEtag"></a>

```typescript
public resetEtag(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetSettingName` <a name="resetSettingName" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.resetSettingName"></a>

```typescript
public resetSettingName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComplianceSecurityProfileWorkspaceSetting resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isConstruct"></a>

```typescript
import { complianceSecurityProfileWorkspaceSetting } from '@cdktn/provider-databricks'

complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformElement"></a>

```typescript
import { complianceSecurityProfileWorkspaceSetting } from '@cdktn/provider-databricks'

complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformResource"></a>

```typescript
import { complianceSecurityProfileWorkspaceSetting } from '@cdktn/provider-databricks'

complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport"></a>

```typescript
import { complianceSecurityProfileWorkspaceSetting } from '@cdktn/provider-databricks'

complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ComplianceSecurityProfileWorkspaceSetting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComplianceSecurityProfileWorkspaceSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComplianceSecurityProfileWorkspaceSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/compliance_security_profile_workspace_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComplianceSecurityProfileWorkspaceSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.complianceSecurityProfileWorkspace">complianceSecurityProfileWorkspace</a></code> | <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference">ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.complianceSecurityProfileWorkspaceInput">complianceSecurityProfileWorkspaceInput</a></code> | <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.etagInput">etagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.providerConfigInput">providerConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfig">ComplianceSecurityProfileWorkspaceSettingProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.settingNameInput">settingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.settingName">settingName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `complianceSecurityProfileWorkspace`<sup>Required</sup> <a name="complianceSecurityProfileWorkspace" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.complianceSecurityProfileWorkspace"></a>

```typescript
public readonly complianceSecurityProfileWorkspace: ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.providerConfig"></a>

```typescript
public readonly providerConfig: ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference">ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference</a>

---

##### `complianceSecurityProfileWorkspaceInput`<sup>Optional</sup> <a name="complianceSecurityProfileWorkspaceInput" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.complianceSecurityProfileWorkspaceInput"></a>

```typescript
public readonly complianceSecurityProfileWorkspaceInput: ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace;
```

- *Type:* <a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a>

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.etagInput"></a>

```typescript
public readonly etagInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: ComplianceSecurityProfileWorkspaceSettingProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfig">ComplianceSecurityProfileWorkspaceSettingProviderConfig</a>

---

##### `settingNameInput`<sup>Optional</sup> <a name="settingNameInput" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.settingNameInput"></a>

```typescript
public readonly settingNameInput: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `settingName`<sup>Required</sup> <a name="settingName" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.settingName"></a>

```typescript
public readonly settingName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSetting.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace <a name="ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace.Initializer"></a>

```typescript
import { complianceSecurityProfileWorkspaceSetting } from '@cdktn/provider-databricks'

const complianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace: complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace.property.complianceStandards">complianceStandards</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/compliance_security_profile_workspace_setting#compliance_standards ComplianceSecurityProfileWorkspaceSetting#compliance_standards}. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/compliance_security_profile_workspace_setting#is_enabled ComplianceSecurityProfileWorkspaceSetting#is_enabled}. |

---

##### `complianceStandards`<sup>Required</sup> <a name="complianceStandards" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace.property.complianceStandards"></a>

```typescript
public readonly complianceStandards: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/compliance_security_profile_workspace_setting#compliance_standards ComplianceSecurityProfileWorkspaceSetting#compliance_standards}.

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/compliance_security_profile_workspace_setting#is_enabled ComplianceSecurityProfileWorkspaceSetting#is_enabled}.

---

### ComplianceSecurityProfileWorkspaceSettingConfig <a name="ComplianceSecurityProfileWorkspaceSettingConfig" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.Initializer"></a>

```typescript
import { complianceSecurityProfileWorkspaceSetting } from '@cdktn/provider-databricks'

const complianceSecurityProfileWorkspaceSettingConfig: complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.complianceSecurityProfileWorkspace">complianceSecurityProfileWorkspace</a></code> | <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a></code> | compliance_security_profile_workspace block. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.etag">etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/compliance_security_profile_workspace_setting#etag ComplianceSecurityProfileWorkspaceSetting#etag}. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/compliance_security_profile_workspace_setting#id ComplianceSecurityProfileWorkspaceSetting#id}. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfig">ComplianceSecurityProfileWorkspaceSettingProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.settingName">settingName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/compliance_security_profile_workspace_setting#setting_name ComplianceSecurityProfileWorkspaceSetting#setting_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `complianceSecurityProfileWorkspace`<sup>Required</sup> <a name="complianceSecurityProfileWorkspace" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.complianceSecurityProfileWorkspace"></a>

```typescript
public readonly complianceSecurityProfileWorkspace: ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace;
```

- *Type:* <a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a>

compliance_security_profile_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/compliance_security_profile_workspace_setting#compliance_security_profile_workspace ComplianceSecurityProfileWorkspaceSetting#compliance_security_profile_workspace}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/compliance_security_profile_workspace_setting#etag ComplianceSecurityProfileWorkspaceSetting#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/compliance_security_profile_workspace_setting#id ComplianceSecurityProfileWorkspaceSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: ComplianceSecurityProfileWorkspaceSettingProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfig">ComplianceSecurityProfileWorkspaceSettingProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/compliance_security_profile_workspace_setting#provider_config ComplianceSecurityProfileWorkspaceSetting#provider_config}

---

##### `settingName`<sup>Optional</sup> <a name="settingName" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingConfig.property.settingName"></a>

```typescript
public readonly settingName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/compliance_security_profile_workspace_setting#setting_name ComplianceSecurityProfileWorkspaceSetting#setting_name}.

---

### ComplianceSecurityProfileWorkspaceSettingProviderConfig <a name="ComplianceSecurityProfileWorkspaceSettingProviderConfig" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfig.Initializer"></a>

```typescript
import { complianceSecurityProfileWorkspaceSetting } from '@cdktn/provider-databricks'

const complianceSecurityProfileWorkspaceSettingProviderConfig: complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/compliance_security_profile_workspace_setting#workspace_id ComplianceSecurityProfileWorkspaceSetting#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.118.0/docs/resources/compliance_security_profile_workspace_setting#workspace_id ComplianceSecurityProfileWorkspaceSetting#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference <a name="ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.Initializer"></a>

```typescript
import { complianceSecurityProfileWorkspaceSetting } from '@cdktn/provider-databricks'

new complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.complianceStandardsInput">complianceStandardsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.complianceStandards">complianceStandards</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `complianceStandardsInput`<sup>Optional</sup> <a name="complianceStandardsInput" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.complianceStandardsInput"></a>

```typescript
public readonly complianceStandardsInput: string[];
```

- *Type:* string[]

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `complianceStandards`<sup>Required</sup> <a name="complianceStandards" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.complianceStandards"></a>

```typescript
public readonly complianceStandards: string[];
```

- *Type:* string[]

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace;
```

- *Type:* <a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace">ComplianceSecurityProfileWorkspaceSettingComplianceSecurityProfileWorkspace</a>

---


### ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference <a name="ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.Initializer"></a>

```typescript
import { complianceSecurityProfileWorkspaceSetting } from '@cdktn/provider-databricks'

new complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfig">ComplianceSecurityProfileWorkspaceSettingProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComplianceSecurityProfileWorkspaceSettingProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.complianceSecurityProfileWorkspaceSetting.ComplianceSecurityProfileWorkspaceSettingProviderConfig">ComplianceSecurityProfileWorkspaceSettingProviderConfig</a>

---



